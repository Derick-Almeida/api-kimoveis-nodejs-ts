import * as yup from "yup";
import { SchemaOf } from "yup";
import { IScheduleRequest } from "../interfaces/schedules";

const createScheduleSchema: SchemaOf<IScheduleRequest | any> = yup.object().shape({
  date: yup.string().required(),
  hour: yup.string().required(),
  propertyId: yup.string().required(),
});

export { createScheduleSchema };
