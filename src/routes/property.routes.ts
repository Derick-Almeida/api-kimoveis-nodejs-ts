import { Router } from "express";
import authUser from "../middlewares/authUser.middleware";

import {
  createPropertyControler,
  listPropertiesController,
} from "../controllers/properties.controller";

const router = Router();

const propertyRoutes = () => {
  router.post("", authUser, createPropertyControler);
  router.get("", authUser, listPropertiesController);

  return router;
};

export default propertyRoutes;
