import "reflect-metadata";
import { DataSource, EntityTarget, ObjectLiteral } from "typeorm";
import dotenv from "dotenv";
import { Branch } from "../entities/Branch";
import { Company } from "../entities/Company";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "oracle",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  sid: process.env.DB_SID,
  synchronize: true,
  logging: false,
  entities: [Branch, Company],
  migrations: [],
  subscribers: [],
});

export const connectDB = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};
