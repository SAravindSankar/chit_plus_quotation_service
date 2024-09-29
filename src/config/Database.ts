import "reflect-metadata";
import { DataSource, EntityTarget, ObjectLiteral } from "typeorm";
import dotenv from "dotenv";
import { join } from "path";
import { readdirSync } from "fs";
import * as glob from "glob";
import * as fs from "fs";
import * as path from "path";
import * as ts from "typescript";

import { MasCompany } from "../entities/MasCompany";
import { MasBranch } from "../entities/MasBranch";
import { MasCounter } from "../entities/MasCounter";
import properties from "../config/Properties";
import oracledb from "oracledb";

// Set the Oracle Client library path
oracledb.initOracleClient({
  libDir: properties.ORCL_INSTANT_CLIENT_HOME,
});

dotenv.config();

const entitiesPath = join(__dirname, "../entities"); // Adjust path based on entities location

// console.log("path--", entitiesPath);
const entityFiles = glob.sync(`${entitiesPath}/*.ts`);
// console.log("entityFiles--", entityFiles);

let entitiesArray: any = [];
let excludedEntities: any = [];

const loadEntities = async () => {
  const allEntities = await Promise.all(
    entityFiles.map(async (file) => {
      const fileSplitArray = file.split("\\");
      const fileName = fileSplitArray[fileSplitArray.length - 1].split(".")[0];
      // console.log("file-2-", fileName);
      if (!excludedEntities.includes(fileName)) {
        const entity = await import(`../entities/${fileName}`);
        const tmp = entity[fileName];
        // const metadataArgsStorage = getMetadataArgsStorage();
        // const entityMetadata = metadataArgsStorage.tables.find(
        //   (table) => table.target === file
        // );

        // console.log("entity--", tmp, tmp.name, tmp.metadata);
        return entity[fileName];
      } else {
        return undefined;
      }
    })
  );
  // console.log("allEntities--", allEntities);
  entitiesArray = allEntities;
  return allEntities;
};

export const Database = async () => {
  const entities = await loadEntities();

  console.log("entities--", entities);
  const dataSource = new DataSource({
    type: "oracle",
    host: properties.DB_HOST,
    port: Number(properties.DB_PORT),
    username: properties.DB_USERNAME,
    password: properties.DB_PASSWORD,
    sid: properties.DB_SID,
    synchronize: false,
    logging: true,
    entities: ["TAR_USERS", ...entities],
    migrations: [],
    subscribers: [],
  });
  return dataSource;
};

// export const AppDataSource =
// export const AppDataSource = new DataSource({
//   type: "oracle",
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT),
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   sid: process.env.DB_SID,
//   synchronize: true,
//   logging: false,
//   entities: entitiesArray,
//   migrations: [],
//   subscribers: [],
// });

const validateTypeScriptFiles = (directoryPath: string) => {
  const files = fs.readdirSync(directoryPath);

  files.forEach((file) => {
    const fullPath = path.join(directoryPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      validateTypeScriptFiles(fullPath); // Recursive check for directories
    } else if (file.endsWith(".ts")) {
      // } else if (file.endsWith(".ts") && file.split(".")[0] === "AccChaDet") {
      const fileContent = fs.readFileSync(fullPath, "utf-8");
      // console.log("file--", file, fileContent);
      const hasPrimaryKey =
        /@PrimaryGeneratedColumn|@PrimaryColumn|primary: true/.test(
          fileContent
        );
      if (!hasPrimaryKey) {
        console.error(`Primary key not found in ${fullPath}`);
        excludedEntities.push(file.split(".")[0]);
      }
      // const result = ts.createProgram([fullPath], { noEmit: true }).emit();
      // console.log("result--", result);
      // if (result.diagnostics.length > 0) {
      //   console.error(`TypeScript type errors found in ${fullPath}`);
      //   excludedEntities.push(file.split(".")[0]);
      //   result.diagnostics.forEach((diag) => {
      //     console.error(diag.messageText);
      //   });
      // } else {
      //   console.log(`No type errors in ${fullPath}`);
      // }
    }
  });
};

export let AppDataSource: any;
export const connectDB = async () => {
  try {
    // await loadEntities();
    // console.log(entitiesArray);
    // await AppDataSource.initialize();
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

// const excludedEntities = [
//   "WkTb1",
//   "WkTbdevi",
//   "WkTb",
//   "WkGsstk",
//   "WkFinalSch1",
//   "WkFinalSch",
//   "WkFinal1",
//   "WkFinal",
//   "WkConQry",
//   "WkDlrtran",
//   "WkCrbl",
//   "WkBs",
//   "WkBalstock",
//   "WeightStock",
//   "WageSlip",
//   "WageAttendence",
//   "TxtGsstk",
//   "TtranAcc",
//   "TserJc",
//   "TserIss",
//   "TserBillDet1",
//   "TserBill",
//   "TranPriceDet11",
//   "TranPriceDet",
//   "TranPrice",
//   "TranData",
//   "TodEventschBenefits",
//   "ToadPlanTable",
//   "TmpQuoDet2",
//   "TmpQuoDet12",
//   "TmpQuoDet11",
//   "TmpQuoDet1",
//   "TmpQuo",
//   "TmasStock",
//   "TmasProduct",
//   "TgrGrnDet13",
//   "TgrDcDet2",
//   "TgrDcDet13",
//   "TgrDcDet12",
//   "TgrDcDet11",
// ];
