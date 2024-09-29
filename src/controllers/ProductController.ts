import { Request, Response } from "express";
import { getProductDetails } from "../services/ProductService";
import ErrorHandler from "../utils/ErrorHandler";

export const productDetails = async (req: Request, res: Response) => {
  try {
    const companyId: string = req?.query?.companyId as string;
    const model: string = req?.query?.model as string;

    if (!companyId) {
      return ErrorHandler.handleBadRequest(res, "CompanyId is required");
    }

    if (!model) {
      return ErrorHandler.handleBadRequest(res, "Model is required");
    }

    const result = await getProductDetails(Number(companyId), model);
    if (result) {
      res.status(200).json(result);
    } else {
      ErrorHandler.handleNotFound(res, "No product details available");
    }
  } catch (error) {
    ErrorHandler.handleError(res, error, "Error fetching product details");
  }
};
