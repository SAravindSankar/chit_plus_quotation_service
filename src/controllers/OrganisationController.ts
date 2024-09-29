import { Request, Response } from "express";
import {
  getAllBranches,
  fetchCounters,
  fetchUser,
} from "../services/OrganisationService";
import logger from "../utils/Logger";
import { LogMethodEntryExit } from "../utils/LoggingDecorator";
import ErrorHandler from "../utils/ErrorHandler";

class OrganisationController {
  @LogMethodEntryExit()
  public async getBranches(req: Request, res: Response) {
    try {
      const branchName: string = (req?.query?.branch as string) || "";
      const result = await getAllBranches(branchName);
      res.status(200).json(result);
    } catch (error) {
      ErrorHandler.handleError(res, error, "Error fetching branches");
    }
  }

  @LogMethodEntryExit()
  public async getCounters(req: Request, res: Response) {
    try {
      const companyId: string = req?.query?.companyId as string;
      const branchId: string = req?.query?.branchId as string;
      const counter: string = req?.query?.counter as string;

      if (!companyId) {
        return ErrorHandler.handleBadRequest(res, "CompanyId is required");
      }

      if (!branchId) {
        return ErrorHandler.handleBadRequest(res, "BranchId is required");
      }

      const result = await fetchCounters(
        parseInt(companyId),
        parseInt(branchId),
        counter
      );
      res.status(200).json(result);
    } catch (error) {
      ErrorHandler.handleError(res, error, "Error fetching counters");
    }
  }

  @LogMethodEntryExit()
  public async userLogin(req: Request, res: Response) {
    try {
      const companyId: number = req?.body?.companyId as number;
      const userName: string = req?.body?.userName as string;
      const password: string = req?.body?.password as string;

      if (!companyId) {
        return ErrorHandler.handleBadRequest(res, "CompanyId is required");
      }

      if (!userName) {
        return ErrorHandler.handleBadRequest(res, "User Name is required");
      }

      if (!password) {
        return ErrorHandler.handleBadRequest(res, "Password is required");
      }

      const deCodedPassword: string = atob(password);
      const user = await fetchUser(companyId, userName);
      if (user && user.password === deCodedPassword) {
        res.status(200).json({ message: "Login Success" });
      } else if (user) {
        res.status(401).json({ error: "Invalid Password" });
      } else {
        res.status(401).json({ error: "Invalid Username" });
      }
    } catch (error) {
      ErrorHandler.handleError(res, error, "Error during user login");
    }
  }
}

export default new OrganisationController();
