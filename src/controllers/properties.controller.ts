import { Request, Response } from "express";
import createPropertyService from "../services/properties/createProperty.service";
import listPropertiesService from "../services/properties/listProperties.service";

const createPropertyControler = async (req: Request, res: Response) => {
  const propertyData = req.body;
  const property = await createPropertyService(propertyData);

  return res.status(201).json(property);
};

const listPropertiesController = async (req: Request, res: Response) => {
  const propertyList = await listPropertiesService();

  return res.json(propertyList);
};

export { createPropertyControler, listPropertiesController };
