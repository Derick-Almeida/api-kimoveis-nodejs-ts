import { Router } from "express";
import { createUserSchema } from "../schemas/user.schema";
import validatedSchema from "../middlewares/validatedSchema.middleware";
import isAdm from "../middlewares/verifyUserIsAdm.middleware";
import authUser from "../middlewares/authUser.middleware";

import {
  createUserController,
  disableUsersController,
  listUsersController,
} from "../controllers/user.controller";

const routes = Router();

const userRoutes = () => {
  routes.post("", validatedSchema(createUserSchema), createUserController);
  routes.get("", authUser, isAdm, listUsersController);
  routes.delete("/:id", authUser, isAdm, disableUsersController);

  return routes;
};

export default userRoutes;
