// src/utils/ErrorHandler.ts
import { Response } from "express";
import logger from "./Logger";

class ErrorHandler {
  public static handleBadRequest(res: Response, message: string) {
    logger.error(message);
    return res.status(400).json({ message });
  }

  public static handleError(res: Response, error: any, message: string) {
    logger.error(`${message}: ${error}`);
    res.status(500).json({ message });
  }
}

export default ErrorHandler;
