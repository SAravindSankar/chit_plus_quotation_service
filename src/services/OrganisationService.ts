import { AppDataSource } from "../config/Database";
import { Branch } from "../entities/Branch";
import { getBranchesQuery } from "../queries/Branch";

const branchRepository = AppDataSource.getRepository(Branch);

export const getAllBranches = async (branchName: string) => {
  // console.log('query--', getBranchesQuery(branchName))
  const responseArray: any = [];
  const result = await branchRepository.query(getBranchesQuery(branchName));
  // console.log("result--", result);
  if (result) {
    result.forEach((e: any) => {
      responseArray.push(e.COMPANY_NAME + " - " + e.NAME);
    });
  }
  // console.log("result--2--", responseArray);
  return responseArray;
};
