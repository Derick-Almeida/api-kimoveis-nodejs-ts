import { Request, Response } from "express";
import createCategoryService from "../services/categories/createCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";
import listPropertiesFromCategoriesService from "../services/categories/listPropertiesFromCategories.service";

const createCategoryController = async (req: Request, res: Response) => {
  const categoryData = req.body;
  const category = await createCategoryService(categoryData);

  return res.status(201).json(category);
};

const listCategoriesController = async (req: Request, res: Response) => {
  const categoryList = await listCategoriesService();

  return res.json(categoryList);
};

const listPropertiesFromCategoriesController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const response = await listPropertiesFromCategoriesService(id);

  return res.json(response);
};

export {
  createCategoryController,
  listCategoriesController,
  listPropertiesFromCategoriesController,
};
