export interface IUser {
  userId: string;
  lastLogin: Date | number
}

export interface IUserService {
  createUser(user:IUser): Promise<void>;
}
