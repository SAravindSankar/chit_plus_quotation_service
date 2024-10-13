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
    if (companyId && level) {
      const result = await getProductsList(Number(companyId), Number(level));
      if (result) {
        console.log("cont--result---", result);
      } else {
        res.status(500).json({ error: "company ID or level not available" });
      }
      res.json(result);
    } else {
      res.status(500).json({ error: "company ID or level not available" });
    }
  } catch (error) {
    logger.error("Error fetching boardRates:" + error);
    // console.error("Error fetching boardRates:", error);
    res.status(500).json({ message: "Error fetching productsList" });
  }
};

export const tagNumbers = async (req: Request, res: Response) => {
  try {
    const branchId: string = req?.query?.branchId as string;
    const model: string = req?.query?.model as string;
    const tagNo: string = req?.query?.tagNo as string;
    if (branchId && model) {
      const result = await getTagNumbers(
        Number(branchId),
        Number(model),
        tagNo
      );
      if (result) {
        console.log("cont--result---", result);
      } else {
        res
          .status(500)
          .json({ error: "branch ID or model or tagNo not available" });
      }
      res.json(result);
    } else {
      res
        .status(500)
        .json({ error: "branch ID or model or tagNo not available" });
    }
  } catch (error) {
    logger.error("Error fetching tagNumbers:" + error);
    // console.error("Error fetching boardRates:", error);
    res.status(500).json({ message: "Error fetching tagNumbers" });
  }
};

export const modelNumber = async (req: Request, res: Response) => {
  try {
    const branchId: string = req?.query?.branchId as string;
    const searchText: string = req?.query?.q as string;
    if (branchId && searchText) {
      const result = await getModelNumber(branchId, searchText);
      if (result) {
        console.log("cont--result---", result);
      } else {
        res.status(500).json({ error: "branchId or searchText not available" });
      }
      res.json(result);
    } else {
      res.status(500).json({ error: "branchId or searchText not available" });
    }
  } catch (error) {
    logger.error("Error fetching modelNumber:" + error);
    // console.error("Error fetching boardRates:", error);
    res.status(500).json({ message: "Error fetching modelNumber" });
  }
};

export const detailsByTag = async (req: Request, res: Response) => {
  try {
    const branchId: string = req?.query?.branchId as string;
    const modelNo: string = req?.query?.modelNo as string;
    const tagNumber: string = req?.query?.tagNumber as string;
    if (branchId && modelNo) {
      const result = await getDetailsByTag(
        Number(branchId),
        Number(modelNo),
        tagNumber
      );
      if (result) {
        console.log("cont--result---", result);
      } else {
        res.status(500).json({ error: "RESULTS not available" });
      }
      res.json(result);
    } else {
      res.status(500).json({ error: "branchId or modelNo not available" });
    }
  } catch (error) {
    logger.error("Error fetching modelNumber:" + error);
    // console.error("Error fetching boardRates:", error);
    res.status(500).json({ message: "Error fetching modelNumber" });
  }
};

export const stoneDetails = async (req: Request, res: Response) => {
  try {
    const tagId: string = req?.query?.tagId as string;
    if (tagId) {
      const result = await getStoneDetailsByTag(tagId);
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
    logger.error("Error fetching modelNumber:" + error);
    console.error("Error fetching boardRates:", error);
    res.status(500).json({ message: "Error fetching modelNumber" });
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
