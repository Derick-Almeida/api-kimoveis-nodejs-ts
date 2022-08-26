import { Router } from "express";
import { createCategorySchema } from "../schemas/category.schema";
import validatedSchema from "../middlewares/validatedSchema.middleware";
import authUser from "../middlewares/authUser.middleware";

import {
  createCategoryController,
  listCategoriesController,
  listPropertiesFromCategoriesController,
} from "../controllers/categories.controller";
import isAdm from "../middlewares/verifyUserIsAdm.middleware";

const router = Router();

const categoryRoutes = () => {
  router.post("", validatedSchema(createCategorySchema), authUser, isAdm, createCategoryController);

  router.get("", listCategoriesController);
  router.get("/:id/properties", listPropertiesFromCategoriesController);

  return router;
};

export default categoryRoutes;
