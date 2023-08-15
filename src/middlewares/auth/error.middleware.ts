import { NextFunction, Request, Response } from "express";
import { Handler } from "express";

export const errorAdapter = (handlerFn: Handler) => {
  return async (req, res, next) => {
    return Promise.resolve(handlerFn(req, res, next)).catch((e) => next(e));
  };
};

export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof Error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};
