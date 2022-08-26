import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entity";

const listPropertiesService = async (): Promise<Property[]> => {
  const propertyRepository = AppDataSource.getRepository(Property);
  const propertyList = await propertyRepository.find();

  return propertyList;
};

export default listPropertiesService;
