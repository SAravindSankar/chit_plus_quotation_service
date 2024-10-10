import cors, { CorsOptions } from "cors";
import os from "os";
import createError from "http-errors";
import properties from "../config/Properties";

// Function to get the server's IP address
const getServerIp = (): string | undefined => {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]!) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return undefined;
};

const serverIp = getServerIp();
const serverHostname = os.hostname();

const corsOptions: CorsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) => {
    const allowedOrigins = [
      `http://${serverIp}`,
      `http://${serverHostname}`,
      `http://localhost:3000`,
    ];

    if (
      allowedOrigins.includes(origin || "") ||
      (origin === undefined &&
        (properties.ENVIRONMENT === "development" ||
          properties.ENVIRONMENT === "DIT")) // Use the ENVIRONMENT from properties
    ) {
      callback(null, true);
    } else {
      callback(createError(401, "Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

export const corsMiddleware = cors(corsOptions);
