import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createScheduleService from "../services/schedules/createSchedule.service";
import listSchedulesForAPropertyServce from "../services/schedules/listSchedulesForAProperty.service";

const createScheduleControler = async (req: Request, res: Response) => {
  const { date, hour, propertyId } = req.body;
  const userId = req.user.id;
  const schedule = await createScheduleService({
    date,
    hour,
    propertyId,
    userId,
  });

  return res.status(201).json(
    instanceToPlain({
      message: "Schedule has been created",
      schedule,
    })
  );
};

const listSchedulesForAPropertyController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const schedules = await listSchedulesForAPropertyServce(id);

  return res.json(instanceToPlain({ schedules }));
};

export { createScheduleControler, listSchedulesForAPropertyController };
