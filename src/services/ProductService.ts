import { AppDataSource } from "../config/Database";
import { JmasProduct } from "../entities/JmasProduct";
import { AltTree1 } from "../entities/AltTree1";
import { JlotDet1 } from "../entities/JlotDet1";
import { JlotDet11 } from "../entities/JlotDet11";

export const getProductDetails = async (companyId: number, model: string) => {
  const productRepository = AppDataSource.getRepository(JmasProduct);
  const altTreeRepository = AppDataSource.getRepository(AltTree1);

  const result = await productRepository
    .createQueryBuilder("P")
    .select([
      "P.STAXFK AS P_STAXFK",
      "P.PRODPK AS P_PRODPK",
      "P.PRODCLASSPK AS P_PRODCLASSPK",
      "P.OLD_PROD_CD AS P_OLD_PROD_CD",
      "P.MODEL_NO",
    ])
    .where("UPPER(P.MODEL_NO) LIKE :modelNo", { modelNo: `${model}%` })
    .andWhere("P.DELFLAG IS NULL")
    .andWhere("P.COMPANYFK = :companyFk", { companyFk: companyId })
    .andWhere(
      "P.PRODCLASSPK NOT IN " +
        "(SELECT DISTINCT A.PRODCLASSPK FROM JMAS_PRODUCT A " +
        "INNER JOIN JMAS_PRODUCT B ON A.PRODCLASSPK = B.HPRODCLASSFK " +
        "WHERE A.DELFLAG IS NULL AND A.COMPANYFK = :companyFk2 " +
        "AND A.PRODCLASSPK IN " +
        "(SELECT PRODCLASSPK FROM JMAS_PRODUCT " +
        "WHERE UPPER(NAME) LIKE :name AND COMPANYFK = :companyFk3 AND DELFLAG IS NULL))",
      { companyFk2: companyId, companyFk3: companyId, name: `${model}%` }
    )
    .andWhere(
      "P.PRODPK IN " +
        "(SELECT PRODFK FROM ALT_TREE1 WHERE COMPANYFK = :companyFk4 AND DELFLAG IS NULL)",
      { companyFk4: companyId }
    )
    .orderBy("P.MODEL_NO", "ASC")
    .getMany();
  return result;
};

export const getProductsList = async (companyId: number, level: number = 1) => {
  const result = await AppDataSource.manager.query(`
    SELECT 
    NVL(hprodclassfk, 0) as productId,
    prodclasspk as modelNo,
    name as product
    FROM 
    jmas_product
    WHERE 
    delflag IS NULL
    AND companyfk = ${companyId}
    START WITH 
    level_no = ${level}
    CONNECT BY 
    PRIOR prodclasspk = hprodclassfk
    ORDER BY 
    level_no,
    prodclasspk,
    hprodclassfk
    `);
  const mappedResults = result.map((e: any) => {
    console.log(e);
    return {
      productId: e.PRODUCTID,
      modelNo: e.MODELNO,
      product: e.PRODUCT,
    };
  });
  return mappedResults;
};
export const getTagNumbers = async (
  branchId: number,
  model: number = 1,
  tagNo: string
) => {
  const query = AppDataSource.getRepository(JlotDet1)
    .createQueryBuilder("JL1") // Alias in uppercase to match the convention
    .select([
      "JL1.TAG_PK",
      "JL1.PROD_TAGNO",
      "JL1.TAG_PCS",
      "JL1.TAG_WT",
      "JM.STAXFK",
      "COALESCE(JL1.NWT, 0) AS NWT",
    ])
    .innerJoin(JmasProduct, "JM", "JL1.PRODFK = JM.PRODPK")
    .where("JL1.BRANCHFK IN (:...branches)", { branches: [branchId] })
    .andWhere("JM.PRODPK = :prodpk", { prodpk: model })
    .andWhere("JL1.DOCFK IS NULL")
    .andWhere("JL1.TRAN_DOCFK IS NULL") // Adjusted case
    .andWhere("JL1.DELFLAG IS NULL");
  if (tagNo) {
    query.andWhere(
      "TRIM(UPPER(COALESCE(JL1.PROD_TAGNO, ' '))) LIKE :prodTagno",
      {
        prodTagno: `${tagNo.toUpperCase()}%`,
      }
    );
  }
  query
    .andWhere("COALESCE(JM.ACTIVE, 'Y') = 'Y'")
    .andWhere("JM.DELFLAG IS NULL");
  const result = await query.getRawMany();
  const mappedResult = result.map((e: any) => {
    return {
      id: e.TAG_PK,
      tagNo: e.PROD_TAGNO,
      piece: e.TAG_PCS,
      wt: e.TAG_WT,
      sTax: e.STAXFK,
      nWt: e.NWT,
    };
  });
  return mappedResult;
};

export const getModelNumber = async (branchId: string, searchText: string) => {
  const tagId = searchText.slice(0, 4); // First 4 characters
  const tagNumber = searchText.slice(4);

  const result = await AppDataSource.manager
    .createQueryBuilder(JlotDet1, "d")
    .select("d.PRODFK", "prodfk") // Selecting the `PRODFK` column
    .innerJoin(JmasProduct, "p", "p.PRODPK = d.PRODFK") // Joining with `JMAS_PRODUCT`
    .where("d.DELFLAG IS NULL") // Condition for `delflag`
    .andWhere("d.ALTTAGFK = :alttagfk", { alttagfk: tagId }) // Condition for `alttagfk`
    .andWhere("UPPER(d.PROD_TAGNO) = :prodTagno", {
      prodTagno: tagNumber.toUpperCase(),
    }) // Case-insensitive match for `prod_tagno`
    .andWhere("d.BRANCHFK IN (:...branchfk)", { branchfk: [branchId] }) // Condition for `branchfk`
    .andWhere("d.DOCFK IS NULL") // `docfk` is null
    .andWhere("d.TRAN_DOCFK IS NULL") // `tran_docfk` is null
    .getRawMany(); // Get raw result

  console.log(result);
  return result;
};

export const getDetailsByTag = async (
  branchId: number,
  modelNo: number,
  tagNumber: string
) => {
  const query = AppDataSource.manager
    .createQueryBuilder(JlotDet1, "jl1")
    .select([
      "jl1.TAG_PK as tag_pk",
      "jl1.PROD_TAGNO as prod_tagno",
      "jl1.TAG_PCS as tag_pcs",
      "jl1.TAG_WT as tag_wt",
      "jm.STAXFK as staxfk",
      "COALESCE(jl1.NWT, 0) as nwt", // Handling the NVL equivalent with COALESCE in SQL
    ])
    .innerJoin(JmasProduct, "jm", "jl1.PRODFK = jm.PRODPK") // Join with JMAS_PRODUCT
    .where("jl1.BRANCHFK IN (:...branchFk)", { branchFk: [branchId] }) // Condition for branchfk
    .andWhere("jm.PRODPK = :prodPk", { prodPk: modelNo }) // Condition for prodpk
    .andWhere("jl1.DOCFK IS NULL"); // Condition for docfk

  if (tagNumber) {
    query.andWhere(
      "TRIM(UPPER(COALESCE(jl1.PROD_TAGNO, :empty))) LIKE :pattern",
      {
        empty: " ",
        pattern: `${tagNumber.toUpperCase()}%`,
      }
    ); // Condition for PROD_TAGNO
  }

  query
    .andWhere("jl1.TRAN_DOCFK IS NULL") // Condition for tran_docfk
    .andWhere("jl1.DELFLAG IS NULL") // Condition for delflag
    .andWhere("COALESCE(jm.ACTIVE, :defaultActive) = :active", {
      defaultActive: "Y",
      active: "Y",
    }) // Condition for active field
    .andWhere("jm.DELFLAG IS NULL"); // Condition for jm.delflag
  const result = await query.getRawMany();
  const mappedResult = result.map((e: any) => {
    return {
      id: e.TAG_PK,
      tagNo: e.PROD_TAGNO,
      piece: e.TAG_PCS,
      wt: e.TAG_WT,
      sTax: e.STAXFK,
      nWt: e.NWT,
    };
  });

  return mappedResult;
};

export const getStoneDetailsByTag = async (tagId: string) => {
  const result = await AppDataSource.manager
    .createQueryBuilder(JlotDet11, "j")
    .select([
      "j.PRODFK as prodfk",
      "COALESCE(j.NAME, ' ') as name", // Handling NVL for name
      "COALESCE(j.PCS, 0) as pcs", // Handling NVL for pcs
      "COALESCE(j.CARAT, 0) as carat", // Handling NVL for carat
      "COALESCE(j.WEIGHT, 0) as weight", // Handling NVL for weight
      "COALESCE(j.QTY, 0) as qty", // Handling NVL for qty
      "COALESCE(j.RATE, 0) as rate", // Handling NVL for rate
      "COALESCE(j.AMOUNT, 0) as amount", // Handling NVL for amount
      "j.LOT_DET11PK as lot_det11Pk", // Primary key
    ])
    .where("j.DELFLAG IS NULL") // Condition for delflag being null
    .andWhere("j.LOT_DET1FK = :lotDet1Fk", { lotDet1Fk: tagId }) // Condition for lotDet1Fk
    .getRawMany(); // Fetch raw results
  console.log(result);
  const mappedResult = result.map((e: any) => {
    return {
      productId: e.PRODFK,
      name: e.NAME,
      pcs: e.PCS,
      carat: e.CARAT,
      weight: e.WEIGHT,
      quantity: e.QTY,
      rate: e.RATE,
      amount: e.AMOUNT,
      lotDet11pk: e.LOT_DET11PK,
    };
  });

  return mappedResult;
};
