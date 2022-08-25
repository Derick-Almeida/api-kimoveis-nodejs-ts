import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppErros";

const disableUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: id });

  if (!user) {
    throw new AppError("User not Found", 404);
  }

  if (!user.isActive) {
    throw new AppError("User is already inactive");
  }

  await userRepository.update(id, {
    isActive: false,
  });
};

export default disableUserService;
