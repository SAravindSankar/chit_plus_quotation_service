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

/**
 * @swagger
 * tags:
 *   - name: Organisation Controller
 *     description: Contains all organisation related routes
 */

/**
 * @swagger
 * /api/branches:
 *   get:
 *     summary: Retrieve a list of branches
 *     tags: [Organisation Controller]
 *     parameters:
 *       - in: query
 *         name: branch
 *         schema:
 *           type: string
 *         description: The name of the branch to filter by
 *     responses:
 *       200:
 *         description: A list of branches
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   displayText:
 *                     type: string
 *                     example: "Tanishq Jewellery"
 *                   companyId:
 *                     type: integer
 *                     example: 32
 *                   branchId:
 *                     type: integer
 *                     example: 132
 *     security:
 *       - bearerAuth: []
 */
router.get("/branches", OrganisationController.getBranches);

/**
 * @swagger
 * /api/counters:
 *   get:
 *     summary: Retrieve a list of counters
 *     tags: [Organisation Controller]
 *     parameters:
 *       - in: query
 *         name: companyId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the company
 *       - in: query
 *         name: branchId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the branch
 *       - in: query
 *         name: counter
 *         schema:
 *           type: string
 *         description: The counter name
 *     responses:
 *       200:
 *         description: A list of counters
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Counter 1"
 *     security:
 *       - bearerAuth: []
 */
router.get("/counters", OrganisationController.getCounters);

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: User login
 *     tags: [Organisation Controller]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               companyId:
 *                 type: integer
 *                 example: 1
 *               userName:
 *                 type: string
 *                 example: "user1"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Login Success"
 *       401:
 *         description: Invalid username or password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid Username"
 */
router.post("/login", OrganisationController.userLogin);

export default router;
