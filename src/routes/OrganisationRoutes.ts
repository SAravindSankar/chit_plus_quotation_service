import { Router } from "express";
import OrganisationController from "../controllers/OrganisationController";

const router = Router();

router.get(
  "/branches",
  OrganisationController.getBranches.bind(OrganisationController)
);

export default router;
