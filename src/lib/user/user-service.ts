import { IUser, IUserService } from "./user-interface";
import User from "./user-model";

export class UserService implements IUserService {
  async createUser(user: IUser): Promise<void> {
    await User.create(user);
  }
}
