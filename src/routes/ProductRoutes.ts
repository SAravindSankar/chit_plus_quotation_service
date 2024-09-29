import { Router } from "express";
import {
  productDetails,
  productsList,
  tagNumbers,
} from "../controllers/ProductController";

const router = Router();

router.get("/details", productDetails);
router.get("/list", productsList);
router.get("/tag-numbers", tagNumbers);

export default router;
