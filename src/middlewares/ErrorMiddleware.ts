import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";

const ErrorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.status === 400) {
    return ErrorHandler.handleBadRequest(res, err.message);
  }
  return ErrorHandler.handleError(res, err, "An unexpected error occurred");
};

export default ErrorMiddleware;
