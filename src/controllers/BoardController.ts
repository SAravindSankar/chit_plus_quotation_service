import { Request, Response } from "express";
import {
  getAllBranches,
  fetchCounters,
  fetchUser,
} from "../services/OrganisationService";
import logger from "../utils/Logger";
import { getBoardRates, getEmpName } from "../services/BoardService";

export const boardRates = async (req: Request, res: Response) => {
  try {
    const branchId: string = req?.query?.branchId as string;
    if (branchId) {
      const result = await getBoardRates(Number(branchId));
      if (result) {
        console.log("cont--result---", result);
      } else {
        res.status(500).json({ error: "No board rates available" });
      }
      res.json(result);
    } else {
      res.status(500).json({ error: "branchId missing in request" });
    }
  } catch (error) {
    logger.error("Error fetching boardRates:" + error);
    // console.error("Error fetching boardRates:", error);
    res.status(500).json({ message: "Error fetching boardRates" });
  }
};

export const employeeName = async (req: Request, res: Response) => {
  const searchText = req?.query?.q as string;
  const companyId = req?.query?.companyId as string;
  const result = await getEmpName(Number(companyId), searchText);
  console.log("res--", result);
  // const namesArray: string[] = [];
  // result.forEach((e) => {
  //   namesArray.push(e.name);
  // });
  res.status(200).send(result);
};
