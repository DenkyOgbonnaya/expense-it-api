import { NextFunction, Request, Response } from "express";
import joi from "joi";
import { BadRequest } from "../../errors";

export const validateCreateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await joi
      .object({
        name: joi
          .string()
          .required()
          .max(50)
          .error(new BadRequest("Enter a brief category name")),
      })

      .validateAsync(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

export const validateGetCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await joi
      .object({
        userId: joi
          .string()
          .required()
          .error(new BadRequest("Provide a user id")),
      })
      .validateAsync(req.params);
    next();
  } catch (error) {
    next(error);
  }
};
