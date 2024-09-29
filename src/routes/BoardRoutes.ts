import { Router } from "express";
import { boardRates, employeeName } from "../controllers/BoardController";

const router = Router();

router.get("/rates", boardRates);
router.get("/employee", employeeName);

export default router;
