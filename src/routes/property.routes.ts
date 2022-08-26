import { Router } from "express";
import authUser from "../middlewares/authUser.middleware";

import {
  createPropertyControler,
  listPropertiesController,
} from "../controllers/properties.controller";
import isAdm from "../middlewares/verifyUserIsAdm.middleware";
import validatedSchema from "../middlewares/validatedSchema.middleware";
import { createPropertySchema } from "../schemas/property.schema";

const router = Router();

const propertyRoutes = () => {
  router.post(
    "",
    validatedSchema(createPropertySchema),
    authUser,
    isAdm,
    createPropertyControler
  );
  router.get("", listPropertiesController);

  return router;
};

export default propertyRoutes;
