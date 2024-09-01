import { Router } from "express";
import { getBranches } from "../controllers/OrganisationController";

const router = Router();

router.get("/branches", getBranches);

export default router;
