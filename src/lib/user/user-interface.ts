export interface IUser {
  userId: string;
}

export interface IUserService {
  createUser(): Promise<void>;
}
