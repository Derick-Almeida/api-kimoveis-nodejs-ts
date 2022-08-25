import { Request, Response } from "express";
import createSessionService from "../services/sessions/createSession.service";

const createSessionController = async (req: Request, res: Response) => {
  const userData = req.body;
  const token = await createSessionService(userData);

  return res.json({ token });
};

export { createSessionController };
