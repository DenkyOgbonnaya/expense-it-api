import { query, RequestHandler } from "express";
import httpStatus from "http-status";
import { responseStatus } from "../../utills/response-status";
import { IExpense, IExpenseService } from "./expense-interface";

interface IExpenseController {
  createExpense: RequestHandler;
  editExpense: RequestHandler;
  deleteExpense: RequestHandler;
  getExpensesByDate: RequestHandler;
  getExpenseCategories: RequestHandler;
  getTotalExpenses: RequestHandler;
  getExpensesByUser: RequestHandler;
  getExpense: RequestHandler;
  getTotalExpensesByDate: RequestHandler;
}

interface query {
  startDate: string;
  endDate: string;
  page: number;
  limit: number;
}

const expenseController = (service: IExpenseService): IExpenseController => ({
  async createExpense(req, res, next) {
    try {
      const data = {
        ...req.body,
        user: req.params.userId,
        date: new Date(req.body.date),
      } as IExpense;
      const expense = await service.createExpense(data);

      res.status(httpStatus.CREATED).send({
        status: responseStatus.SUCCESS,
        message: "Expense added",
        data: expense,
      });
    } catch (error) {
      next(error);
    }
  },
  async editExpense(req, res, next) {
    const { userId, expenseId } = req.params;
    try {
      const data = req.body as IExpense;

      const expense = await service.editExpense(expenseId, userId, data);
      res.status(httpStatus.OK).send({
        status: responseStatus.SUCCESS,
        message: "Expense edited",
        data: expense,
      });
    } catch (error) {
      next(error);
    }
  },
  async deleteExpense(req, res, next) {
    try {
      const { userId, expenseId } = req.params;
      await service.deleteExpense(expenseId, userId);
      res.status(httpStatus.OK).send({
        status: responseStatus.SUCCESS,
        message: "Expense deleted",
        data: null,
      });
    } catch (error) {
      next(error);
    }
  },
  async getExpensesByDate(req, res, next) {
    try {
      const { userId } = req.params;
      const {
        startDate,
        endDate,
        page = 1,
        limit = 10,
      } = req.query as unknown as query;
      const data = await service.getExpensesByDate(
        userId,
        startDate,
        endDate,
        page,
        limit
      );
      const count = await service.getUserExpensesCount(userId, startDate, endDate)

      res.status(httpStatus.OK).send({
        status: responseStatus.SUCCESS,
        message: "",
        data: data,
        totalCount:count
      });
    } catch (error) {
      next(error);
    }
  },
  async getExpenseCategories(req, res, next) {
    try {
      const { userId } = req.params;
      const {
        startDate,
        endDate,
        page = 1,
        limit = 10,
      } = req.query as unknown as query;
      const data = await service.getExpenseCategories(
        userId,
        startDate,
        endDate,
        page,
        limit
      );
      res.status(httpStatus.OK).send({
        status: responseStatus.SUCCESS,
        message: "",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  },
  async getTotalExpenses(req, res, next) {
    try {
      const data = await service.getTotalExpenses(req.params.userId);
      res.status(httpStatus.OK).send({
        status: responseStatus.SUCCESS,
        message: "",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  },
  async getTotalExpensesByDate(req, res, next) {
    try {
      const {
        startDate,
        endDate,
      } = req.query as unknown as query;
      const data = await service.getTotalExpensesByDate(req.params.userId, startDate, endDate);
      res.status(httpStatus.OK).send({
        status: responseStatus.SUCCESS,
        message: "",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  },
  async getExpensesByUser(req, res, next) {
    try {
      const { userId } = req.params;
      const { page, limit } = req.query as unknown as query;
      const data = await service.getExpensesByUser(userId, page, limit);

      res.status(httpStatus.OK).send({
        status: responseStatus.SUCCESS,
        message: "",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  },
  async getExpense(req, res, next) {
    try {
      const { userId, expenseId } = req.params;
      const data = await service.getExpense(expenseId, userId);
      res.status(httpStatus.OK).send({
        status: responseStatus.SUCCESS,
        message: "",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  },
});

export default expenseController;
