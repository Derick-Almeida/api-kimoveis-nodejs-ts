import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserLogin, IUserRequest } from "../interfaces/users";

const createUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required(),
  isAdm: yup.boolean().required(),
});

const sessionUserSchema: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export { createUserSchema, sessionUserSchema };
