import { compare } from "bcryptjs";
import { User } from "../../entities/users.entity";
import { IUserLogin } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import AppError from "../../errors/AppErros";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createSessionService = async ({ email, password }: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ email: email });

  if (!user) {
    throw new AppError("Invalid email or password", 403);
  }

  const matchPassword = await compare(password, user.password);

  if (!matchPassword) {
    throw new AppError("Invalid email or password", 403);
  }

  if (!user.isActive) {
    throw new AppError("Inactive user", 400);
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "1d",
      subject: user.id,
    }
  );

  return token;
};

export default createSessionService;
