import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
// import { validationMiddleware } from './middlewares/ValidationMiddleware';
import OrganisationRoutes from "./routes/OrganisationRoutes";
import BoardRoutes from "./routes/BoardRoutes";
import ProductRoutes from "./routes/ProductRoutes";
import { setupMorganMiddleware } from "./middlewares/MorganLoggerMiddleware";
import { responseBodyCapture } from "./middlewares/ResponseBodyCaptureMiddleware";
import { jwtAuthorization } from "./middlewares/JwtAuthorizationMiddleware";
import ErrorMiddleware from "./middlewares/ErrorMiddleware";
import { limiter } from "./middlewares/RateLimitMiddleware";
import { compressionMiddleware } from "./middlewares/CompressionMiddleware";
import { setupSwagger } from "./config/SwaggerConfig";

dotenv.config();

const app = express();
app.use(express.json());

// Use response body capture middleware
app.use(responseBodyCapture);

// Setup Morgan middleware
setupMorganMiddleware(app);

app.use(limiter);

// Apply compression middleware globally
app.use(compressionMiddleware);

// Setup Swagger
setupSwagger(app);

// Use JWT authorization middleware for protected routes
app.use("/api", jwtAuthorization, OrganisationRoutes);
app.use("/api/board", BoardRoutes);
app.use("/api/product", ProductRoutes);

// app.post('/users', validationMiddleware(User), createUserController);

app.use(ErrorMiddleware);

export default app;
