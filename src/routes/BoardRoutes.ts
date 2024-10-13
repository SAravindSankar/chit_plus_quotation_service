import { Router } from "express";
import { boardRates, employeeName } from "../controllers/BoardController";

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Board Controller
 *     description: Contains all board related routes
 */

/**
 * @swagger
 * /api/board/rates:
 *   get:
 *     summary: Retrieve board rates for a particular branch
 *     tags: [Board Controller]
 *     parameters:
 *       - in: query
 *         name: branchId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the branch (ex 132)
 *     responses:
 *       200:
 *         description: A list of board rates
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   item:
 *                     type: string
 *                     example: "GOLD"
 *                   unitPerRate:
 *                     type: number
 *                     example: 6820
 *                   exchRate:
 *                     type: number
 *                     example: 6684
 *                   cashRate:
 *                     type: number
 *                     example: 6820
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "branchId is required"
 *       404:
 *         description: Not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No board rates available"
 *     security:
 *       - bearerAuth: []
 */
router.get("/rates", boardRates);

/**
 * @swagger
 * /api/board/employee:
 *   get:
 *     summary: Retrieve employee details for a particular company
 *     tags: [Board Controller]
 *     parameters:
 *       - in: query
 *         name: companyId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the company (ex 32)
 *       - in: query
 *         name: searchText
 *         schema:
 *           type: string
 *         description: The search text for employee names (ex Shan) or employee code (ex 11)
 *     responses:
 *       200:
 *         description: A list of employee names
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: "John Doe"
 *                   code:
 *                     type: string
 *                     example: "11"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "companyId is required"
 *     security:
 *       - bearerAuth: []
 */
router.get("/employee", employeeName);

export default router;
