"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var expense_controller_1 = __importDefault(require("./expense-controller"));
var expense_service_1 = require("./expense-service");
var expense_validator_1 = require("./expense-validator");
var router = (0, express_1.Router)();
var expenseService = new expense_service_1.ExpenseService();
var controller = (0, expense_controller_1.default)(expenseService);
router
    .route("/users/:userId")
    .post(expense_validator_1.validateCreateExpense, controller.createExpense)
    .get(expense_validator_1.validateGetExpenseByDate, controller.getExpensesByDate);
router
    .route("/:expenseId/users/:userId")
    .get(expense_validator_1.validateGetSingleExpense, controller.getExpense)
    .put(expense_validator_1.validateGetSingleExpense, expense_validator_1.validateCreateExpense, controller.editExpense)
    .delete(expense_validator_1.validateDeleteExpense, controller.deleteExpense);
router.get("/users/:userId/categories", expense_validator_1.validateGetExpenseByDate, controller.getExpenseCategories);
router.get("/users/:userId/total", expense_validator_1.validateGetTotalUserExpense, controller.getTotalExpenses);
router.get("/users/:userId/date-total", expense_validator_1.validateGetExpenseByDate, controller.getTotalExpensesByDate);
exports.default = router;
