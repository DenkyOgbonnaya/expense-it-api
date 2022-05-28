import { Router } from "express";
import categoryController from "./category-controller";
import { CategoryService } from "./category-service";
import {
  validateCreateCategory,
  validateGetCategories,
} from "./category-validator";

const router: Router = Router();
const service = new CategoryService();
const controller = categoryController(service);

router
  .route("/users/:userId")
  .post(
    validateGetCategories,
    validateCreateCategory,
    controller.createCategory
  )
  .get(validateGetCategories, controller.getCategories);

export default router;
