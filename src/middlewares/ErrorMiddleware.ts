import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";

const ErrorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  switch (err.status) {
    case 400:
      return ErrorHandler.handleBadRequest(res, err.message);
    case 401:
      return ErrorHandler.handleUnauthorized(res, err.message);
    case 403:
      return ErrorHandler.handleForbidden(res, err.message);
    case 404:
      return ErrorHandler.handleNotFound(res, err.message);
    case 500:
      return ErrorHandler.handleServerError(res, err.message);
    default:
      return ErrorHandler.handleError(res, err, "An unexpected error occurred");
  }
};

export default ErrorMiddleware;
