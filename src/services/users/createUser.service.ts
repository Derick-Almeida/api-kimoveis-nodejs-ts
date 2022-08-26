import { hash } from "bcryptjs";
import { User } from "../../entities/users.entity";
import { IUserRequest } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import AppError from "../../errors/AppErros";

const createUserService = async ({ email, isAdm, name, password }: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const emailAlreadyExists = await userRepository.findOneBy({ email: email });

  if (emailAlreadyExists) {
    throw new AppError("Email already exists", 400);
  }

  const hashedPassword = await hash(password, 10);

  const user = await userRepository.save({
    name,
    email,
    password: hashedPassword,
    isAdm,
  });

  return user;
};

export default createUserService;
