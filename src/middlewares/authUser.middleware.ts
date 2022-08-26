import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import AppError from "../errors/AppErros";

const authUser = async (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("Invalid token", 401);
  }

  if (token.includes("Bearer")) {
    token = token.split(" ")[1];
  }

  jwt.verify(token, process.env.SECRET_KEY as string, (err: any, decoded: any) => {
    if (err) {
      res.status(401).json({
        message: "Invalid token",
      });
    }

    req.user = {
      isAdm: decoded.isAdm,
      id: decoded.sub,
    };

    next();
  });
};

export default authUser;
