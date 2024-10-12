import { Brackets } from "typeorm";
import { AppDataSource } from "../config/Database";
import { JmasProdRate } from "../entities/JmasProdRate";
import { JmasProduct } from "../entities/JmasProduct";
import { JmasRate } from "../entities/JmasRate";
import { MasEmp } from "../entities/MasEmp";

export const getBoardRates = async (branchId: number) => {
  const productRepository = await AppDataSource.getRepository(JmasProduct);

  const result = await productRepository
    .createQueryBuilder("A")
    .select([
      '"A"."NAME" AS "item"',
      '"B"."UNIT_PER_RATE" / "B"."UNIT_PER" AS "unitPerRate"',
      '"B"."EXCH_RATE" AS "exchRate"',
      '"B"."CASH_RATE" AS "cashRate"',
    ])
    .innerJoin(JmasProdRate, "B", '"A"."PRODCLASSPK" = "B"."PRODCLASSFK"')
    .innerJoin(JmasRate, "C", '"C"."MAS_RATEPK" = "B"."MAS_RATEFK"')
    .where('"C"."DELFLAG" IS NULL')
    .andWhere('"B"."DELFLAG" IS NULL')
    .andWhere('"C"."BRANCHFK" = :branchId', { branchId })
    .getRawMany();
  return result;
};

export const getEmpName = async (
  companyId: number,
  searchText: string | null
) => {
  const empRepository = await AppDataSource.getRepository(MasEmp);

  const query = empRepository
    .createQueryBuilder("e")
    .select(["e.name", "e.code"])
    .where("e.delflag IS NULL")
    .andWhere("e.companyfk = :companyId", { companyId });

  if (searchText) {
    query.andWhere(
      new Brackets((qb) => {
        qb.where("UPPER(e.code) LIKE :code", {
          code: `${searchText.toUpperCase()}%`,
        }).orWhere("UPPER(e.name) LIKE :name", {
          name: `${searchText.toUpperCase()}%`,
        });
      })
    );
  }

  const result = await query.getMany();
  return result;
};
