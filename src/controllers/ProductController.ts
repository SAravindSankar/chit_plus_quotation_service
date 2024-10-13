import { Request, Response } from "express";
import logger from "../utils/Logger";
import {
  getDetailsByTag,
  getModelNumber,
  getProductDetails,
  getProductOtherCharges,
  getProductsList,
  getStoneDetailsByTag,
  getTagNumbers,
  getTaxCharges,
  getOtherCharges,
} from "../services/ProductService";
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

export const productsList = async (req: Request, res: Response) => {
  try {
    const companyId: string = req?.query?.companyId as string;
    const level: string = req?.query?.level as string;

    if (!companyId) {
      return ErrorHandler.handleBadRequest(res, "CompanyId is required");
    }

    if (!level) {
      return ErrorHandler.handleBadRequest(res, "Level is required");
    }

    const result = await getProductsList(Number(companyId), Number(level));
    if (result) {
      res.status(200).json(result);
    } else {
      ErrorHandler.handleNotFound(res, "No products list available");
    }
  } catch (error) {
    ErrorHandler.handleError(res, error, "Error fetching products list");
  }
};

export const tagNumbers = async (req: Request, res: Response) => {
  try {
    const branchId: string = req?.query?.branchId as string;
    const model: string = req?.query?.model as string;
    const tagNo: string = req?.query?.tagNo as string;

    if (!branchId) {
      return ErrorHandler.handleBadRequest(res, "BranchId is required");
    }

    if (!model) {
      return ErrorHandler.handleBadRequest(res, "Model is required");
    }

    const result = await getTagNumbers(Number(branchId), Number(model), tagNo);
    if (result) {
      res.status(200).json(result);
    } else {
      ErrorHandler.handleNotFound(res, "No tag numbers available");
    }
  } catch (error) {
    ErrorHandler.handleError(res, error, "Error fetching tag numbers");
  }
};

export const modelNumber = async (req: Request, res: Response) => {
  try {
    const branchId: string = req?.query?.branchId as string;
    const searchText: string = req?.query?.q as string;

    if (!branchId) {
      return ErrorHandler.handleBadRequest(res, "BranchId is required");
    }

    if (!searchText) {
      return ErrorHandler.handleBadRequest(res, "Search text is required");
    }

    const result = await getModelNumber(branchId, searchText);
    if (result) {
      res.status(200).json(result);
    } else {
      ErrorHandler.handleNotFound(res, "No model numbers available");
    }
  } catch (error) {
    ErrorHandler.handleError(res, error, "Error fetching model numbers");
  }
};

export const detailsByTag = async (req: Request, res: Response) => {
  try {
    const branchId: string = req?.query?.branchId as string;
    const modelNo: string = req?.query?.modelNo as string;
    const tagNumber: string = req?.query?.tagNumber as string;

    if (!branchId) {
      return ErrorHandler.handleBadRequest(res, "BranchId is required");
    }

    if (!modelNo) {
      return ErrorHandler.handleBadRequest(res, "ModelNo is required");
    }

    const result = await getDetailsByTag(
      Number(branchId),
      Number(modelNo),
      tagNumber
    );
    if (result) {
      res.status(200).json(result);
    } else {
      ErrorHandler.handleNotFound(
        res,
        "No details available for the given tag"
      );
    }
  } catch (error) {
    ErrorHandler.handleError(res, error, "Error fetching details by tag");
  }
};

export const stoneDetails = async (req: Request, res: Response) => {
  try {
    const tagId: string = req?.query?.tagId as string;

    if (!tagId) {
      return ErrorHandler.handleBadRequest(res, "TagId is required");
    }

    const result = await getStoneDetailsByTag(tagId);
    if (result) {
      res.status(200).json(result);
    } else {
      ErrorHandler.handleNotFound(
        res,
        "No stone details available for the given tag"
      );
    }
  } catch (error) {
    ErrorHandler.handleError(res, error, "Error fetching stone details");
  }
};

export const productOtherCharges = async (req: Request, res: Response) => {
  try {
    const tagId: string = req?.query?.tagId as string;
    if (tagId) {
      const result = await getProductOtherCharges(tagId);
      if (result) {
        console.log("cont--result---", result);
      } else {
        res.status(500).json({ error: "RESULTS not available" });
      }
      res.json(result);
    } else {
      res.status(500).json({ error: "tagId not available" });
    }
  } catch (error) {
    logger.error("Error fetching productOtherCharges:" + error);
    console.error("Error fetching productOtherCharges:", error);
    res.status(500).json({ message: "Error fetching productOtherCharges" });
  }
};

export const otherCharges = async (req: Request, res: Response) => {
  try {
    const tagId: string = req?.query?.tagId as string;

    if (!tagId) {
      return ErrorHandler.handleBadRequest(res, "TagId is required");
    }

    const result = await getOtherCharges(Number(tagId));
    if (result) {
      res.status(200).json(result);
    } else {
      ErrorHandler.handleNotFound(
        res,
        "No other charges available for the given tag"
      );
    }
  } catch (error) {
    ErrorHandler.handleError(res, error, "Error fetching other charges");
  }
};

export const taxCharges = async (req: Request, res: Response) => {
  try {
    const companyId: string = req?.query?.companyId as string;
    const taxPrimaryKey: string = req?.query?.taxPrimaryKey as string;

    if (!companyId) {
      return ErrorHandler.handleBadRequest(res, "CompanyId is required");
    }

    const result = await getTaxCharges(
      Number(companyId),
      taxPrimaryKey ? Number(taxPrimaryKey) : undefined
    );
    if (result) {
      res.status(200).json(result);
    } else {
      ErrorHandler.handleNotFound(
        res,
        "No tax charges available for the given parameters"
      );
    }
  } catch (error) {
    ErrorHandler.handleError(res, error, "Error fetching tax charges");
  }
};
