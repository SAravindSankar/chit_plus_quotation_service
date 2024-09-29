import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
// import { validationMiddleware } from './middlewares/ValidationMiddleware';
import OrganisationRoutes from "./routes/OrganisationRoutes";
import BoardRoutes from "./routes/BoardRoutes";
import ProductRoutes from "./routes/ProductRoutes";
import { setupMorganMiddleware } from "./middlewares/MorganLoggerMiddleware"; // Import Morgan setup function
import { responseBodyCapture } from "./middlewares/ResponseBodyCaptureMiddleware"; // Import response body capture middleware
import { jwtAuthorization } from "./middlewares/JwtAuthorizationMiddleware"; // Import JWT authorization middleware
import ErrorMiddleware from "./middlewares/ErrorMiddleware"; // Import JWT authorization middleware

dotenv.config();

const app = express();
app.use(express.json());

// Use response body capture middleware
app.use(responseBodyCapture);

// Setup Morgan middleware
setupMorganMiddleware(app);

// Use JWT authorization middleware for protected routes
app.use("/api", jwtAuthorization, OrganisationRoutes);
app.use("/api/board", BoardRoutes);
app.use("/api/product", ProductRoutes);

// app.post('/users', validationMiddleware(User), createUserController);

app.use(ErrorMiddleware);

export default app;
