import { AppDataSource } from "../config/Database";
import { JmasProduct } from "../entities/JmasProduct";
import { AltTree1 } from "../entities/AltTree1";

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
    .where("UPPER(P.MODEL_NO) LIKE :modelNo", { modelNo: "ROPE%" })
    .andWhere("P.DELFLAG IS NULL")
    .andWhere("P.COMPANYFK = :companyFk", { companyFk: 32 })
    .andWhere(
      "P.PRODCLASSPK NOT IN " +
        "(SELECT DISTINCT A.PRODCLASSPK FROM JMAS_PRODUCT A " +
        "INNER JOIN JMAS_PRODUCT B ON A.PRODCLASSPK = B.HPRODCLASSFK " +
        "WHERE A.DELFLAG IS NULL AND A.COMPANYFK = :companyFk2 " +
        "AND A.PRODCLASSPK IN " +
        "(SELECT PRODCLASSPK FROM JMAS_PRODUCT " +
        "WHERE UPPER(NAME) LIKE :name AND COMPANYFK = :companyFk3 AND DELFLAG IS NULL))",
      { companyFk2: 32, companyFk3: 32, name: "ROPE%" }
    )
    .andWhere(
      "P.PRODPK IN " +
        "(SELECT PRODFK FROM ALT_TREE1 WHERE COMPANYFK = :companyFk4 AND DELFLAG IS NULL)",
      { companyFk4: 32 }
    )
    .orderBy("P.MODEL_NO", "ASC")
    .getMany();
  return result;
};
