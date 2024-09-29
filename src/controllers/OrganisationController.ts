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
      res.status(200).json(result);
    } catch (error) {
      logger.error(`Error fetching branches: ${error}`);
      res.status(500).json({ message: "Error fetching branches" });
    }
  }

  @LogMethodEntryExit()
  public async getCounters(req: Request, res: Response) {
    try {
      const companyId: string = req?.query?.companyId as string;
      const branchId: string = req?.query?.branchId as string;
      const counter: string = req?.query?.counter as string;
      if (companyId && branchId) {
        const result = await fetchCounters(
          parseInt(companyId),
          parseInt(branchId),
          counter
        );
        res.status(200).json(result);
      } else {
        logger.error("No branch present for getCounters");
        res.status(400).json({ message: "No branch present in request" });
      }
    } catch (error) {
      logger.error(`Error fetching counters: ${error}`);
      res.status(500).json({ message: "Error fetching counters" });
    }
  }

  @LogMethodEntryExit()
  public async userLogin(req: Request, res: Response) {
    try {
      const companyId: number = req?.body?.companyId as number;
      const userName: string = req?.body?.userName as string;
      const password: string = req?.body?.password as string;
      const deCodedPassword: string = atob(password);
      const user = await fetchUser(companyId, userName);
      if (user && user.password === deCodedPassword) {
        res
          .status(200)
          .json({ message: "Login Success", empCode: user.tarsuserspk });
      } else if (user) {
        res.status(401).json({ error: "Invalid Password" });
      } else {
        res.status(401).json({ error: "Invalid Username" });
      }
    } catch (error) {
      logger.error(`Error during user login: ${error}`);
      res.status(500).json({ message: "Error during user login" });
    }
  }
}

export default new OrganisationController();
