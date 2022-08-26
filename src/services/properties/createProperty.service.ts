import AppDataSource from "../../data-source";
import { Address } from "../../entities/addresses.entity";
import { Category } from "../../entities/categories.entity";
import { Property } from "../../entities/properties.entity";
import AppError from "../../errors/AppErros";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertyService = async ({
  address,
  size,
  value,
  categoryId,
}: IPropertyRequest): Promise<Property> => {
  const propertyRepository = AppDataSource.getRepository(Property);
  const categoryRepository = AppDataSource.getRepository(Category);
  const addressRepository = AppDataSource.getRepository(Address);

  const category = await categoryRepository.findOneBy({ id: categoryId });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const addressAlreadyExists = await addressRepository.findOne({
    where: {
      city: address.city,
      district: address.district,
      number: address.number,
      state: address.state,
      zipCode: address.zipCode,
    },
  });

  if (addressAlreadyExists) {
    throw new AppError("Address already belongs to another property");
  }

  const newAddress = await addressRepository.save(address);

  const property = await propertyRepository.save({
    value,
    size,
    address: newAddress,
    category: category,
  });

  return property;
};

export default createPropertyService;
