import { NextFunction, Request, Response } from "express";
import joi from "joi";
import { BadRequest } from "../../errors";

export const validateCreateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
   await joi.object({
      userId: joi
        .string()
        .required()
        .error(new BadRequest("User Id is required"))
        
    }).validateAsync(req.body)
    next();
  } catch (error) {
    next(error);
  }
};
