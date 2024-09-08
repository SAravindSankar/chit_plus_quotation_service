import "reflect-metadata";
import { DataSource } from "typeorm";
import { Branch } from "../entities/Branch";
import { Company } from "../entities/Company";
import properties from "../config/Properties";
//dotenv.config();

export const AppDataSource = new DataSource({
  type: "oracle",
  host: properties.DB_HOST,
  port: properties.DB_PORT,
  username: properties.DB_USERNAME,
  password: properties.DB_PASSWORD,
  sid: properties.DB_SID,
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
