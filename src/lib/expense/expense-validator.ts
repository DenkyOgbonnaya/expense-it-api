import { NextFunction, Request, Response } from "express";
import joi from "joi";
import { BadRequest } from "../../errors";

export const validateCreateExpense = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await joi
      .object({
        title: joi
          .string()
          .required()
          .max(50)
          .error(new BadRequest("Expense title is required")),
        amount: joi
          .number()
          .required()
          .error(new BadRequest("Expense amount required")),
        date: joi
          .string()
          .required()
          .error(new BadRequest("Expense date required")),
        category: joi
          .string()
          .error(new BadRequest("Expense user is required")),
      })

      .validateAsync(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

export const validateDeleteExpense = async (
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
          .error(new BadRequest("user ID param was not provided")),
        expenseId: joi
          .number()
          .required()
          .error(new BadRequest("ExpenseId param was not provided")),
      })
      .validateAsync(req.params);
    next();
  } catch (error) {
    next(error);
  }
};

export const validateGetExpenseByDate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = {
    ...req.params,
    ...req.query,
  };
  try {
    await joi
      .object({
        userId: joi
          .string()
          .required()
          .error(new BadRequest("user ID param was not provided")),
        startDate: joi
          .string()
          .required()
          .error(new BadRequest("Start date query string required")),
        endDate: joi
          .string()
          .required()
          .error(new BadRequest("End date query string required")),
      })
      .validateAsync(data);
    next();
  } catch (error) {
    next(error);
  }
};

export const validateGetTotalUserExpense = async (
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
          .error(new BadRequest("user ID param was not provided")),
      })
      .validateAsync(req.params);
    next();
  } catch (error) {
    next(error);
  }
};

export const validateGetSingleExpense = async (
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
          .error(new BadRequest("user ID param was not provided")),
        expenseId: joi
          .string()
          .required()
          .error(new BadRequest("expense ID param was not provided")),
      })
      .validateAsync(req.params);
    next();
  } catch (error) {
    next(error);
  }
};
