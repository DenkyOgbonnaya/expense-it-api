import { RequestHandler } from "express";
import httpStatus from "http-status";
import { IUser, IUserService } from "./user-interface";

export interface IUserController {
  createUser: RequestHandler;
}

export const userController = (service: IUserService): IUserController => ({
  async createUser(req, res, next) {
    const { body } = req;

    const userData: IUser = {
      userId: body.userId,
      lastLogin: Date.now(),
    };

    try {
      await service.createUser(userData);

      res.status(httpStatus.CREATED).send({
        data: null,
        message: "User created",
        status: "Success",
      });
    } catch (error) {
      next(error);
    }
  },
});
