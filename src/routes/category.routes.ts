import { Router } from "express";
import { createCategorySchema } from "../schemas/category.schema";
import validatedSchema from "../middlewares/validatedSchema.middleware";
import authUser from "../middlewares/authUser.middleware";

import {
  createCategoryController,
  listPropertiesFromCategoriesController,
} from "../controllers/categories.controller";

const router = Router();

const categoryRoutes = () => {
  router.post("", authUser, createCategoryController);
  router.get(
    "/:id/properties",
    validatedSchema(createCategorySchema),
    authUser,
    listPropertiesFromCategoriesController
  );

  return router;
};

export default categoryRoutes;
