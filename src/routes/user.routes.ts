import { Router } from "express";
import { createUserSchema } from "../schemas/user.schema";
import validatedSchema from "../middlewares/validatedSchema.middleware";
import authUser from "../middlewares/authUser.middleware";

import {
  createUserController,
  deleteUsersController,
  listUsersController,
} from "../controllers/user.controller";

const routes = Router();

const userRoutes = () => {
  routes.post("", validatedSchema(createUserSchema), createUserController);
  routes.get("", listUsersController);
  routes.delete("/:id", authUser, deleteUsersController);

  return routes;
};

export default userRoutes;
