import "reflect-metadata";
import { DataSource } from "typeorm";
import { join } from "path";
import * as glob from "glob";
import * as fs from "fs";
import * as path from "path";

import properties from "../config/Properties";
import oracledb from "oracledb";

// Set the Oracle Client library path
//oracledb.initOracleClient({
// libDir: properties.ORCL_INSTANT_CLIENT_HOME,
//});

let entitiesPath = join(__dirname, "../entities"); // Adjust path based on entities location

if (
  properties.ENVIRONMENT === "production" ||
  properties.ENVIRONMENT === "DIT"
) {
  entitiesPath = join(__dirname, "entities"); // Adjust path based on entities location
}

const entityFiles = glob.sync(`${entitiesPath}/*.ts`);

let entitiesArray: any = [];
let excludedEntities: any = [];

const loadEntities = async () => {
  const allEntities = await Promise.all(
    entityFiles.map(async (file) => {
      const fileSplitArray = file.split("\\");
      const fileName = fileSplitArray[fileSplitArray.length - 1].split(".")[0];
      if (!excludedEntities.includes(fileName)) {
        try {
          // Use static import
          const entity = require(`../entities/${fileName}`);
          return entity[fileName];
        } catch (error) {
          console.error(`Error loading entity ${fileName}:`, error);
          return undefined;
        }
      } else {
        return undefined;
      }
    })
  );
  entitiesArray = allEntities;
  return allEntities;
};

export const Database = async () => {
  const entities = await loadEntities();
  const dataSource = new DataSource({
    type: "oracle",
    host: properties.DB_HOST,
    port: properties.DB_PORT,
    username: properties.DB_USERNAME,
    password: properties.DB_PASSWORD,
    sid: properties.DB_SID,
    synchronize: false,
    logging: true,
    entities: entities,
    migrations: [],
    subscribers: [],
  });
  return dataSource;
};

const validateTypeScriptFiles = (directoryPath: string) => {
  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    const fullPath = path.join(directoryPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      validateTypeScriptFiles(fullPath); // Recursive check for directories
    } else if (file.endsWith(".ts")) {
      const fileContent = fs.readFileSync(fullPath, "utf-8");
      const hasPrimaryKey =
        /@PrimaryGeneratedColumn|@PrimaryColumn|primary: true/.test(
          fileContent
        );
      if (!hasPrimaryKey) {
        console.error(`Primary key not found in ${fullPath}`);
        excludedEntities.push(file.split(".")[0]);
      }
    }
  });
};

export let AppDataSource: any;
export const connectDB = async () => {
  try {
    validateTypeScriptFiles(entitiesPath);
    console.log("excludedEntities--", excludedEntities.toString());
    const db = await Database();
    await db.initialize();
    AppDataSource = db;
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};
