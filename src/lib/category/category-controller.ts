import { RequestHandler } from "express";
import httpStatus from "http-status";
import { responseStatus } from "../../utills/response-status";
import { ICategory, ICategoryService } from "./category-interface";

export interface ICategoryController {
  createCategory: RequestHandler;
  getCategories: RequestHandler;
}

const categoryController = (
  service: ICategoryService
): ICategoryController => ({
  async createCategory(req, res, next) {
    const { userId } = req.params;
    const data = { ...req.body, user: userId } as ICategory;

    try {
      const category = await service.createCategory(data);

      res.status(httpStatus.CREATED).send({
        data: category,
        message: "Category added",
        status: responseStatus.SUCCESS,
      });
    } catch (error) {
      next(error);
    }
  },

  async getCategories(req, res, next) {
    try {
      const { userId } = req.params;

      const categories = await service.getCategories(userId);

      res.status(httpStatus.OK).send({
        data: categories,
        message: "",
        status: responseStatus.SUCCESS,
      });
    } catch (error) {
      next(error);
    }
  },
});

export default categoryController;
