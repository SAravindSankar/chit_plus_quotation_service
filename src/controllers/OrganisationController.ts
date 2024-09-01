import { Request, Response } from "express";
import { getAllBranches } from "../services/OrganisationService";
import logger from "../utils/Logger";

export const getBranches = async (req: Request, res: Response) => {
  try {
    const branchName: string = (req?.query?.branch as string) || "";
    const result = await getAllBranches(branchName);
    if (result) {
    }
    console.log("cont--result---", result);

    res.json(result);
  } catch (error) {
    logger.error("Error fetching branches:" + error);
    console.error("Error fetching branches:", error);
    res.status(500).json({ message: "Error fetching branches" });
  }
};
