import { Request, Response } from "express";
import {
  getAllBranches,
  fetchCounters,
  fetchUser,
} from "../services/OrganisationService";
import logger from "../utils/Logger";
import { getBoardRates, getEmpName } from "../services/BoardService";
import {
  getProductDetails,
  getProductsList,
  getTagNumbers,
} from "../services/ProductService";

export const productDetails = async (req: Request, res: Response) => {
  try {
    const companyId: string = req?.query?.companyId as string;
    const model: string = req?.query?.model as string;
    if (companyId && model) {
      const result = await getProductDetails(Number(companyId), model);
      if (result) {
        console.log("cont--result---", result);
      } else {
        res.status(500).json({ error: "No board rates available" });
      }
      res.json(result);
    } else {
      res.status(500).json({ error: "branchId or model missing in request" });
    }
  } catch (error) {
    logger.error("Error fetching boardRates:" + error);
    // console.error("Error fetching boardRates:", error);
    res.status(500).json({ message: "Error fetching boardRates" });
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
