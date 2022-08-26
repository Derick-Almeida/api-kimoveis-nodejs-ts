import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppErros";

const handlerErrorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  return res.status(500).json("Internal server error!");
};

export default handlerErrorMiddleware;
