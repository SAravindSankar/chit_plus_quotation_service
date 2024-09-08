import { Request, Response, NextFunction } from "express";

export const responseBodyCapture = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const oldSend = res.send;

  res.send = function (data) {
    res.locals.body = data;
    return oldSend.apply(res, arguments as any);
  };
  next();
};
