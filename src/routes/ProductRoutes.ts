import { Router } from "express";
import { productDetails } from "../controllers/ProductController";

const router = Router();

router.get("/details", productDetails);

export default router;
