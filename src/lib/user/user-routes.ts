import { Router } from "express";
import { userController } from "./user-controller";
import { UserService } from "./user-service";
import { validateCreateUser } from "./user-validator";

const userRouter: Router = Router();
const userService = new UserService();
const controller = userController(userService);

userRouter.route("/").post(validateCreateUser, controller.createUser);

export default userRouter;
