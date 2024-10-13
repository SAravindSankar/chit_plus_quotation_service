import { AppDataSource } from "../config/Database";
import { MasBranch } from "../entities/MasBranch";
import { MasCounter } from "../entities/MasCounter";
import { TarUsers } from "../entities/TarUsers";
import { getBranchesQuery } from "../queries/Branch";
import logger from "../utils/Logger";

export const getAllBranches = async (branchName: string) => {
  const branchRepository = await AppDataSource.getRepository(MasBranch);

  // console.log('query--', getBranchesQuery(branchName))
  const responseArray: any = [];
  const result = await branchRepository.query(getBranchesQuery(branchName));
  // console.log("result--", result);
  if (result) {
    result.forEach((e: any) => {
      responseArray.push({
        displayText: e.COMPANY_NAME + " - " + e.NAME,
        companyId: e.COMPANYPK,
        branchId: e.BRANCHPK,
      });
    });
  }
  // console.log("result--2--", responseArray);
  return responseArray;
};

export const fetchCounters = async (
  companyId: number,
  branchId: number,
  counter: string
) => {
  try {
    // console.log('query--', getBranchesQuery(branchName))
    const counterRepository = AppDataSource.getRepository(MasCounter);

    const responseArray: any = [];
    const countersQuery = counterRepository
      .createQueryBuilder("counter")
      .select(["counter.counterpk", "counter.location", "counter.section"]) // Select specific columns
      .where("counter.delflag IS NULL") // Check delflag is NULL
      .andWhere("counter.active = :active", { active: "Y" }) // Active is 'Y'
      .andWhere("counter.COMPANYFK = :companyId", { companyId }) // Match companyId
      .andWhere("counter.branchfk = :branchId", { branchId }) // Match branchId
      .orderBy("counter.location"); // Order by location
    if (counter) {
      countersQuery.andWhere("TRIM(UPPER(counter.location)) LIKE :location", {
        location: `${counter.toUpperCase()}%`,
      }); // Trim and upper case for location
    }
    const counters = await countersQuery.getMany();
    // console.log("counters--", counters);
    if (counters) {
      counters.map((e: any) => {
        return (e.displayText = e.location + "-" + e.section);
      });
    }
    return counters;
  } catch (error: any) {
    logger.info("Error fetching counters:", error.message);
    logger.info(error.stack);
    return [];
  }
};

export const fetchUser = async (companyId: number, username: string) => {
  const userRepository = AppDataSource.getRepository(TarUsers);

  const user = await userRepository
    .createQueryBuilder("user")
    .select()
    .where("user.delflag IS NULL")
    .andWhere(`UPPER("user".user_id) = :username`, {
      username: username.toUpperCase(),
    })
    .andWhere("user.companyfk = :companyId", { companyId })
    .getOne(); // use `getOne()` if you expect a single result

  return user;
};
