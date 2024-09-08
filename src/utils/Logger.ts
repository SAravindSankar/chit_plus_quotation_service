import { createLogger, format, transports } from "winston";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";
import DailyRotateFile from "winston-daily-rotate-file"; // Import DailyRotateFile
import moment from "moment-timezone"; // Import moment-timezone

// Load environment variables from .env file
dotenv.config();

// Define the base log directory from environment variable
const baseDir = process.env.BASE_DIR || path.resolve(__dirname);

// Join the "logs" folder to the base log directory
const logDir = path.join(baseDir, "logs");

// Ensure the log directory exists
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

// Custom timestamp format function
const timestampFormat = () =>
  moment().tz(moment.tz.guess()).format("YYYY-MM-DD HH:mm:ss");

const logger = createLogger({
  level: "info", // Ensure the logger level is set to "info"
  format: format.combine(
    format.timestamp({ format: timestampFormat }),
    format.printf(
      ({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`
    )
  ),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(logDir, "quotation-service-%DATE%.log"),
      datePattern: "DD_MM_YYYY",
      zippedArchive: false,
      maxSize: "30m",
      maxFiles: "14d",
      createSymlink: true,
      symlinkName: "quotation-service.log",
    }),
  ],
});

export default logger;
