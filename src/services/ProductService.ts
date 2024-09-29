import { AppDataSource } from "../config/Database";
import { JmasProduct } from "../entities/JmasProduct";
import { AltTree1 } from "../entities/AltTree1";
import { JlotDet1 } from "../entities/JlotDet1";

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
