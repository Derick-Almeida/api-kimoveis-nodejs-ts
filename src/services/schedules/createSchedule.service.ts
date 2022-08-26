import { IScheduleRequest } from "../../interfaces/schedules";
import { ScheluderUserPropertie } from "../../entities/schedulesUsersProperties.entity";
import AppDataSource from "../../data-source";
import AppError from "../../errors/AppErros";
import { Property } from "../../entities/properties.entity";
import { User } from "../../entities/users.entity";

const createScheduleService = async ({
  date,
  hour,
  propertyId,
  userId,
}: IScheduleRequest): Promise<ScheluderUserPropertie> => {
  const propetyRepository = AppDataSource.getRepository(Property);
  const scheduleRepository = AppDataSource.getRepository(ScheluderUserPropertie);
  const userRepository = AppDataSource.getRepository(User);

  const property = await propetyRepository.findOneBy({ id: propertyId });
  const user = await userRepository.findOneBy({ id: userId });

  const weekday = new Date(date).toLocaleDateString("en-US", { weekday: "long" });

  if (!property) {
    throw new AppError("Property not found", 404);
  }

  if (weekday === "Saturday" || weekday === "Sunday") {
    throw new AppError("Invalid date");
  }

  if (+hour.split(":")[0] >= 18 || +hour.split(":")[0] < 8) {
    throw new AppError("Invalid hour");
  }

  const scheduleList = await scheduleRepository.find();

  const scheduleAlreadyExists = scheduleList.some((schedule) => {
    const fullDate = new Date(`${schedule.date} ${schedule.hour}`);
    const compareDate = new Date(`${date} ${hour}`);

    return fullDate.toString() === compareDate.toString();
  });

  if (!!scheduleAlreadyExists) {
    throw new AppError("Schedule already exists");
  }

  const schedule = await scheduleRepository.save({
    date,
    hour,
    property: property,
    user: user!,
  });

  return schedule;
};

export default createScheduleService;
