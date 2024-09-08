import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { errorHandler } from "./utils/ErrorHandler";
import OrganisationRoutes from "./routes/OrganisationRoutes";
import { setupMorganMiddleware } from "./middlewares/MorganLoggerMiddleware"; // Import Morgan setup function
import { responseBodyCapture } from "./middlewares/ResponseBodyCaptureMiddleware"; // Import response body capture middleware

dotenv.config();

const app = express();
app.use(express.json());

// Use response body capture middleware
app.use(responseBodyCapture);

// Setup Morgan middleware
setupMorganMiddleware(app);

app.use("/api", OrganisationRoutes);

// app.post('/users', validationMiddleware(User), createUserController);

app.use(errorHandler);

export default app;
