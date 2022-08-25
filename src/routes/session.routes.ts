import { Router } from "express";
import { sessionUserSchema } from "../schemas/user.schema";
import validatedSchema from "../middlewares/validatedSchema.middleware";

import { sessionUserController } from "../controllers/session.controller";

const routes = Router();

const sessionRoutes = () => {
  routes.post("", validatedSchema(sessionUserSchema), sessionUserController);

  return routes;
};

export default sessionRoutes;
