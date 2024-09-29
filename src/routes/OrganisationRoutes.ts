import { Router } from "express";
import {
  getBranches,
  getCounters,
  userLogin,
} from "../controllers/OrganisationController";
import { fetchUser } from "../services/OrganisationService";

const router = Router();

router.get("/branches", getBranches);
router.get("/counters", getCounters);
router.post("/login", userLogin);

export default router;
