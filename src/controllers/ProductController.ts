import { Request, Response } from "express";
import {
  getAllBranches,
  fetchCounters,
  fetchUser,
} from "../services/OrganisationService";
import logger from "../utils/Logger";
import { getBoardRates, getEmpName } from "../services/BoardService";
import { getProductDetails } from "../services/ProductService";

export const productDetails = async (req: Request, res: Response) => {
  try {
    const companyId: string = req?.query?.companyId as string;
    const model: string = req?.query?.model as string;
    if (companyId && model) {
      const result = await getProductDetails(Number(companyId), model);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ error: "No product details available" });
      }
    } else {
      res.status(400).json({ error: "companyId or model missing in request" });
    }
  } catch (error) {
    logger.error(`Error fetching product details: ${error}`);
    res.status(500).json({ message: "Error fetching product details" });
  }
};
