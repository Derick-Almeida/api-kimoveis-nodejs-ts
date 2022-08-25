import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";

const listUsersService = async (): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const userList = userRepository.find();

  return userList;
};

export default listUsersService;
