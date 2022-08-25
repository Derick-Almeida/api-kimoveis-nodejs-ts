import { NextFunction, Request, Response } from "express";

const isAdm = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.user.isAdm) {
    return res.status(403).json({
      message: "User must be administrator",
    });
  }

  next();
};

export default isAdm;
