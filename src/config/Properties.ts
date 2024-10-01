import PropertiesReader from "properties-reader";
import { resolve } from "path";

// Define the Properties interface
interface Properties {
  PORT: number;
  DATABASE_URL: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_SID: string;
  BASE_DIR: string;
  JWT_SECRET?: string;
  ORCL_INSTANT_CLIENT_HOME?: string;
  ENVIRONMENT?: string; // Add ENVIRONMENT to the interface
}

// Get the BASE_DIR from command-line arguments
const args = process.argv.slice(2);
const baseDirArg = args.find((arg) => arg.startsWith("BASE_DIR="));

if (!baseDirArg) {
  throw new Error("BASE_DIR argument is not provided");
}

const BASE_DIR = baseDirArg.split("=")[1];

// Resolve the path to the properties file within the properties folder
const propertiesPath = resolve(
  BASE_DIR,
  "properties",
  "quotation_service.properties"
);

// Read the properties file
const propertiesMap = PropertiesReader(propertiesPath);

// Helper function to get property value as string
const getStringProperty = (key: string, defaultValue: string): string => {
  const value = propertiesMap.get(key);
  return value !== null && value !== undefined
    ? value.toString()
    : defaultValue;
};

// Helper function to get property value as number
const getNumberProperty = (key: string, defaultValue: number): number => {
  const value = propertiesMap.get(key);
  return value !== null && value !== undefined ? Number(value) : defaultValue;
};

// Extract properties with types and null/undefined checks
const properties: Properties = {
  PORT: getNumberProperty("PORT", 3000),
  DATABASE_URL: getStringProperty(
    "DATABASE_URL",
    "oracle://username:password@hostname:port/SID"
  ),
  DB_HOST: getStringProperty("DB_HOST", "localhost"),
  DB_PORT: getNumberProperty("DB_PORT", 1521),
  DB_USERNAME: getStringProperty("DB_USERNAME", "RMARETPLUS"),
  DB_PASSWORD: getStringProperty("DB_PASSWORD", "Chitplus123#"),
  DB_SID: getStringProperty("DB_SID", "CHITPLUS"),
  JWT_SECRET: getStringProperty("JWT_SECRET", "CHIT_PLUS"),
  ORCL_INSTANT_CLIENT_HOME: getStringProperty(
    "ORCL_INSTANT_CLIENT_HOME",
    "D:\\Work\\Softwares\\Oracle19cHOME\\instantclient_19_24"
  ),
  BASE_DIR: BASE_DIR,
  ENVIRONMENT: getStringProperty("ENVIRONMENT", "development"), // Add ENVIRONMENT extraction
};

export default properties;
