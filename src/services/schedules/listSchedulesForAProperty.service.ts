import { IScheduleRequest } from "../../interfaces/schedules";
import { ScheluderUserPropertie } from "../../entities/schedulesUsersProperties.entity";
import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entity";
import AppError from "../../errors/AppErros";

const listSchedulesForAPropertyServce = async (id: string): Promise<ScheluderUserPropertie[]> => {
  const scheduleRepository = AppDataSource.getRepository(ScheluderUserPropertie);
  const propetyRepository = AppDataSource.getRepository(Property);

  const property = await propetyRepository.findOneBy({ id: id });

  if (!property) {
    throw new AppError("Property not found", 404);
  }

  const schedules = await scheduleRepository.findBy({ property: property });

  return schedules;
};

export default listSchedulesForAPropertyServce;
