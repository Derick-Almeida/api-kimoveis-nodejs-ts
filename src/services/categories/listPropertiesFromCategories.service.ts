import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { Property } from "../../entities/properties.entity";
import AppError from "../../errors/AppErros";

const listPropertiesFromCategoriesService = async (categoryId: string): Promise<Object> => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const propertyRepository = AppDataSource.getRepository(Property);

  const category = await categoryRepository.findOneBy({
    id: categoryId,
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const propertyList = await propertyRepository.findBy({
    category: category,
  });

  return { ...category, properties: propertyList };
};

export default listPropertiesFromCategoriesService;
