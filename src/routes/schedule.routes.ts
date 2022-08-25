import { Router } from "express";
import authUser from "../middlewares/authUser.middleware";

import {
  createScheduleControler,
  listSchedulesForAPropertyController,
} from "../controllers/schedules.controller";

const router = Router();

const scheduleRoutes = () => {
  router.post("", authUser, createScheduleControler);
  router.get("/properties/:id", authUser, listSchedulesForAPropertyController);

  return router;
};

export default scheduleRoutes;
