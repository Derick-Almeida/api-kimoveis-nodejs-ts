import { Router } from "express";
import { createScheduleSchema } from "../schemas/schedule.schems";
import validatedSchema from "../middlewares/validatedSchema.middleware";
import authUser from "../middlewares/authUser.middleware";

import {
  createScheduleControler,
  listSchedulesForAPropertyController,
} from "../controllers/schedules.controller";

const router = Router();

const scheduleRoutes = () => {
  router.post(
    "",
    validatedSchema(createScheduleSchema),
    authUser,
    createScheduleControler
  );
  router.get("/properties/:id", authUser, listSchedulesForAPropertyController);

  return router;
};

export default scheduleRoutes;
