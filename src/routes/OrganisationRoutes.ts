import { Router } from "express";
// import {
//   getBranches,
//   getCounters,
//   userLogin,
// } from "../controllers/OrganisationController";
import { fetchUser } from "../services/OrganisationService";
import OrganisationController from "../controllers/OrganisationController";
//import { LogMethodEntryExit1 } from "../middlewares/LoggingMiddleware";
//router.use(LogMethodEntryExit1);

const router = Router();

router.get("/branches", OrganisationController.getBranches);
router.get("/counters", OrganisationController.getCounters);
router.post("/login", OrganisationController.userLogin);

export default router;
