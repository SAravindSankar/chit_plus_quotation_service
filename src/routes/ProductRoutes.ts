import { Router } from "express";
import {
  modelNumber,
  productDetails,
  productsList,
  tagNumbers,
  detailsByTag,
  stoneDetails,
} from "../controllers/ProductController";

const router = Router();

router.get("/details", productDetails);
router.get("/list", productsList);
router.get("/tag-numbers", tagNumbers);
router.get("/model-number", modelNumber);
router.get("/details-by-tag", detailsByTag);
router.get("/stoneDetails", stoneDetails);

export default router;
