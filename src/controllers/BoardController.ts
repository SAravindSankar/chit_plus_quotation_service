import { Request, Response } from "express";
import { getBoardRates, getEmpName } from "../services/BoardService";
import ErrorHandler from "../utils/ErrorHandler";

export const boardRates = async (req: Request, res: Response) => {
  try {
    const branchId: string = req?.query?.branchId as string;

    if (!branchId) {
      return ErrorHandler.handleBadRequest(res, "branchId is required");
    }

    const result = await getBoardRates(Number(branchId));
    if (result) {
      res.status(200).json(result);
    } else {
      ErrorHandler.handleNotFound(res, "No board rates available");
    }
  } catch (error) {
    ErrorHandler.handleError(res, error, "Error fetching board rates");
  }
};

export const employeeName = async (req: Request, res: Response) => {
  try {
    const searchText = req?.query?.q as string;
    const companyId = req?.query?.companyId as string;

    if (!companyId) {
      return ErrorHandler.handleBadRequest(res, "companyId is required");
    }

    const result = await getEmpName(Number(companyId), searchText);
    res.status(200).json(result);
  } catch (error) {
    ErrorHandler.handleError(res, error, "Error fetching employee names");
  }
};
