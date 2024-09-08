import { Request, Response } from "express";
import { getAllBranches } from "../services/OrganisationService";
import logger from "../utils/Logger";
import { LogMethodEntryExit } from "../utils/LoggingDecorator";

class OrganisationController {
  @LogMethodEntryExit()
  public async getBranches(req: Request, res: Response) {
    try {
      const branchName: string = (req?.query?.branch as string) || "";
      const result = await getAllBranches(branchName);
      // Capture the response body before sending it
      res.locals.body = result;
      res.status(200).json(result);
    } catch (error) {
      logger.error("Error fetching branches:" + error);
      console.error("Error fetching branches:", error);
      res.status(500).json({ message: "Error fetching branches" });
    }
  }
}

export default new OrganisationController();
