/* // src/middleware/LoggingMiddleware.ts
import { Request, Response, NextFunction } from "express";
import logger from "../utils/Logger";

function safeStringify(obj: any) {
  const seen = new WeakSet();
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return "[Circular]";
      }
      seen.add(value);
    }
    return value;
  });
}

function extractRelevantRequestInfo(req: Request) {
  if (!req) return {};
  return {
    method: req?.method,
    url: req?.originalUrl || req?.url,
    query: req?.query,
    body: req?.body,
    //path: req?.headers?.route?.path,
    params: req?.params,
  };
}

function extractRelevantResponseInfo(res: Response) {
  if (!res) return {};
  return {
    statusCode: res?.statusCode,
    statusMessage: res?.statusMessage,
    //headers: res?.getHeaders ? res.getHeaders() : res?._headers, // Use getHeaders() if available, fallback to _headers
    resLocalBody: res?.locals?.body, // Capture the body from res.locals
    //body: res?.body,
  };
}

export function LogMethodEntryExit1(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("req:", req.route);
  console.log("req.route?.path:", req.route?.path);
  console.log("req.route?.stack:", req.route?.stack);

  const className = req.route?.path || "UnknownClass";
  const methodName = req.route?.stack[0]?.name || "UnknownMethod";

  logger.info(
    `Entering method ${className}.${methodName} with request: ${safeStringify(
      extractRelevantRequestInfo(req)
    )}`
  );

  res.on("finish", () => {
    logger.info(
      `Exiting method ${className}.${methodName} with response: ${safeStringify(
        extractRelevantResponseInfo(res)
      )}`
    );
  });

  res.on("error", (error: any) => {
    logger.error(
      `Method ${className}.${methodName} threw an error: ${safeStringify(
        error
      )}`
    );
  });

  next();
}
 */
