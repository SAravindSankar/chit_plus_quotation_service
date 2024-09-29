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
        res.status(200).json(result);
      } else {
        res.status(404).json({ error: "No board rates available" });
      }
    } else {
      res.status(400).json({ error: "branchId missing in request" });
    }
  } catch (error) {
    logger.error(`Error fetching boardRates: ${error}`);
    res.status(500).json({ message: "Error fetching boardRates" });
  }
};

export const employeeName = async (req: Request, res: Response) => {
  try {
    const searchText = req?.query?.q as string;
    const companyId = req?.query?.companyId as string;
    const result = await getEmpName(Number(companyId), searchText);
    res.status(200).json(result);
  } catch (error) {
    logger.error(`Error fetching employee names: ${error}`);
    res.status(500).json({ message: "Error fetching employee names" });
  }
};
