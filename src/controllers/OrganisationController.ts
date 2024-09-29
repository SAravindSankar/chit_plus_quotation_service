import { Request, Response } from "express";
import {
  getAllBranches,
  fetchCounters,
  fetchUser,
} from "../services/OrganisationService";
import logger from "../utils/Logger";
import { LogMethodEntryExit } from "../utils/LoggingDecorator";

class OrganisationController {
  @LogMethodEntryExit()
  public async getBranches(req: Request, res: Response) {
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
  }

  @LogMethodEntryExit()
  public async getCounters(req: Request, res: Response) {
    try {
      const companyId = req?.query?.companyId as string;
      const branchId = req?.query?.branchId as string;
      const counter = req?.query?.counter as string;
      if (companyId && branchId) {
        const result = await fetchCounters(
          parseInt(companyId),
          parseInt(branchId),
          counter
        );
        if (result) {
        }
        console.log("cont--result---", result);

        res.json(result);
      } else {
        logger.error("No branch present for getCounters");
        res.status(500).json({ message: "No branch present in request" });
      }
    } catch (error) {
      logger.error("Error fetching branches:" + error);
      // console.error("Error fetching branches:", error);
      res.status(500).json({ message: "Error fetching branches" });
    }
  }

  @LogMethodEntryExit()
  public async userLogin(req: Request, res: Response) {
    const companyId = req?.body?.companyId as number;
    const userName = req?.body?.userName as string;
    const password = req?.body?.password as string;
    const deCodedPassword = atob(password);
    const user = await fetchUser(companyId, userName);
    console.log("user--", user);
    if (user && user.password === deCodedPassword) {
      res.status(200).json({ message: "Login Success" });
    } else if (user) {
      res.status(500).json({ error: "Invalid Password" });
    } else {
      res.status(500).json({ error: "Invalid Username" });
    }
  }
}

export default new OrganisationController();
