import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";
import listUsersService from "../services/users/listUsers.service";
import disableUserService from "../services/users/disableUser.service";
import { instanceToPlain } from "class-transformer";

const createUserController = async (req: Request, res: Response) => {
  const userData = req.body;
  const user = await createUserService(userData);

  return res.status(201).json({ ...user, password: undefined });
};

const listUsersController = async (req: Request, res: Response) => {
  const userList = await listUsersService();

  return res.json(instanceToPlain(userList));
};

const disableUsersController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await disableUserService(id);

  return res.status(204).send();
};

export { createUserController, listUsersController, disableUsersController };
