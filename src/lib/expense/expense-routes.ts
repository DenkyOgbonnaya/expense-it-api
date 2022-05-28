import { Router } from "express";
import expenseController from "./expense-controller";
import { ExpenseService } from "./expense-service";
import {
  validateCreateExpense,
  validateDeleteExpense,
  validateGetExpenseByDate,
  validateGetSingleExpense,
  validateGetTotalUserExpense,
} from "./expense-validator";

const router: Router = Router();
const expenseService = new ExpenseService();
const controller = expenseController(expenseService);

router
  .route("/users/:userId")
  .post(validateCreateExpense, controller.createExpense)
  .get(validateGetExpenseByDate, controller.getExpensesByDate);

router
  .route("/:expenseId/users/:userId")
  .get(validateGetSingleExpense, controller.getExpense)
  .put(validateGetSingleExpense, validateCreateExpense, controller.editExpense)
  .delete(validateDeleteExpense, controller.deleteExpense);

router.get(
  "/users/:userId/categories",
  validateGetExpenseByDate,
  controller.getExpenseCategories
);

router.get(
  "/users/:userId/total",
  validateGetTotalUserExpense,
  controller.getTotalExpenses
);
router.get(
  "/users/:userId/date-total",
  validateGetExpenseByDate,
  controller.getTotalExpensesByDate
);
export default router;
