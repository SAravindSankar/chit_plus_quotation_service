import express from "express";
import dotenv from "dotenv";
// import { validationMiddleware } from './middlewares/ValidationMiddleware';
import { errorHandler } from "./utils/ErrorHandler";
import OrganisationRoutes from "./routes/OrganisationRoutes";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", OrganisationRoutes);

// app.post('/users', validationMiddleware(User), createUserController);

app.use(errorHandler);

export default app;
