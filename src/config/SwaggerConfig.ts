import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import path from "path";
import properties from "../config/Properties";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Quotation Service API",
      version: "1.0.0",
      description: "Chit Plus Quotation Service API",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis:
    properties.ENVIRONMENT !== "development"
      ? [
          path.join(__dirname, "../routes/*.js"),
          path.join(__dirname, "../controllers/*.js"),
        ]
      : [
          path.join(__dirname, "../src/routes/*.ts"),
          path.join(__dirname, "../src/controllers/*.ts"),
        ],
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
