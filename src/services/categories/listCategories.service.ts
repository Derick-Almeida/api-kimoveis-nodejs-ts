import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";

const listCategoriesService = async (): Promise<Category[]> => {
  const userRepository = AppDataSource.getRepository(Category);
  const categoryList = userRepository.find();

  return categoryList;
};

export default listCategoriesService;
