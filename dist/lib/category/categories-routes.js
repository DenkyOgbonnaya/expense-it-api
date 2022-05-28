"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var category_controller_1 = __importDefault(require("./category-controller"));
var category_service_1 = require("./category-service");
var category_validator_1 = require("./category-validator");
var router = (0, express_1.Router)();
var service = new category_service_1.CategoryService();
var controller = (0, category_controller_1.default)(service);
router
    .route("/users/:userId")
    .post(category_validator_1.validateGetCategories, category_validator_1.validateCreateCategory, controller.createCategory)
    .get(category_validator_1.validateGetCategories, controller.getCategories);
exports.default = router;
