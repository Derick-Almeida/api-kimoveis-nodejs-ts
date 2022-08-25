import { Router } from "express";
import {
  createCategoryController,
  listPropertiesFromCategoriesController,
} from "../controllers/categories.controller";
import authUser from "../middlewares/authUser.middleware";

const router = Router();

const categoryRoutes = () => {
  router.post("", authUser, createCategoryController);
  router.get(
    "/:id/properties",
    authUser,
    listPropertiesFromCategoriesController
  );

  return router;
};

export default categoryRoutes;
