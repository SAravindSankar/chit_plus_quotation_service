// src/utils/LoggingDecorator.ts
import logger from "./Logger";

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
  }); // Removed indentation for readability
}

function extractRelevantRequestInfo(req: any) {
  if (!req) return {};
  return {
    method: req?.method,
    url: req?.originalUrl || req?.url,
    query: req?.query,
    body: req?.body,
    path: req?.headers?.route?.path,
    params: req?.params,
  };
}

function extractRelevantResponseInfo(res: any) {
  if (!res) return {};
  return {
    statusCode: res?.statusCode,
    statusMessage: res?.statusMessage,
    //headers: res?.getHeaders ? res.getHeaders() : res?._headers, // Use getHeaders() if available, fallback to _headers
    resLocalBody: res?.locals?.body, // Capture the body from res.locals
    body: res?.body,
  };
}

export function LogMethodEntryExit() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const req = args[0]; // Assuming the first argument is the request object
      const res = args[1]; // Assuming the second argument is the response object
      const className = target.constructor.name;

      logger.info(
        `Entering method ${className}.${propertyKey} with request: ${safeStringify(
          extractRelevantRequestInfo(req)
        )}`
      );

      let result;
      try {
        result = originalMethod.apply(this, args);
        if (result && typeof result.then === "function") {
          // Handle asynchronous method
          return result
            .then((methodResult: any) => {
              // Log the response after the method has been executed
              logger.info(
                `Exiting method ${className}.${propertyKey} with response: ${safeStringify(
                  extractRelevantResponseInfo(res)
                )}`
              );
              return methodResult;
            })
            .catch((error: any) => {
              logger.error(
                `Method ${className}.${propertyKey} threw an error: ${safeStringify(
                  error
                )}`
              );
              throw error;
            });
        } else {
          // Handle synchronous method
          // Log the response after the method has been executed
          logger.info(
            `Exiting method ${className}.${propertyKey} with response: ${safeStringify(
              extractRelevantResponseInfo(res)
            )}`
          );
          return result;
        }
      } catch (error) {
        logger.error(
          `Method ${className}.${propertyKey} threw an error: ${safeStringify(
            error
          )}`
        );
        throw error;
      }
    };

    return descriptor;
  };
}
