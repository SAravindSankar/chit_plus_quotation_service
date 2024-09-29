import morgan, { StreamOptions } from "morgan";
import { Request, Response } from "express";
import logger from "../utils/Logger"; // Adjust the path as necessary

// Custom tokens to log request and response separately
morgan.token("req-body", (req: Request) => JSON.stringify(req.body));
morgan.token("res-body", (req: Request, res: Response) => res.locals.body);
morgan.token("req-log", (req: Request) => {
  return JSON.stringify({
    method: req?.method,
    url: req?.originalUrl,
    query: req?.query,
    body: req?.body,
    params: req?.params,
  });
});
morgan.token("res-log", (req: Request, res: Response) => {
  return JSON.stringify({
    statusCode: res?.statusCode,
    statusMessage: res?.statusMessage,
    resLocalBody: res?.locals?.body,
  });
});

// Custom token to log both request and response
morgan.token("req-res-log", (req: Request, res: Response) => {
  return JSON.stringify({
    request: {
      method: req?.method,
      url: req?.originalUrl,
      query: req?.query,
      body: req?.body,
      params: req?.params,
    },
    response: {
      statusCode: res?.statusCode,
      statusMessage: res?.statusMessage,
      resLocalBody: res?.locals?.body,
    },
  });
});

const stream: StreamOptions = {
  write: (message: string) => logger.info(message.trim()),
};

export const setupMorganMiddleware = (app: any) => {
  /* app.use(
    morgan(
      ":req-log",
      { stream, immediate: true } // Log request immediately
    )
  );

  app.use(
    morgan(
      ":res-log",
      { stream } // Log response after response is sent
    )
  ); */

  app.use(
    morgan(
      ":req-res-log",
      { stream } // Log request and response together
    )
  );
};
