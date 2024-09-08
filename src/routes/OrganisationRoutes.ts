import { Router } from "express";
import OrganisationController from "../controllers/OrganisationController";
//import { LogMethodEntryExit1 } from "../middlewares/LoggingMiddleware";

const router = Router();

//router.use(LogMethodEntryExit1);

router.get("/branches", (req, res) =>
  OrganisationController.getBranches(req, res)
);

export default router;
