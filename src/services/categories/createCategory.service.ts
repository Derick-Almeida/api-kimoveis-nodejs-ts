import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import AppError from "../../errors/AppErros";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryService = async ({ name }: ICategoryRequest): Promise<ICategoryRequest> => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const categoryAlreadyExists = await categoryRepository.findOneBy({
    name: name,
  });

  if (categoryAlreadyExists) {
    throw new AppError("Category already exists");
  }

  const category = await categoryRepository.save({ name });

  return category;
};

export default createCategoryService;
