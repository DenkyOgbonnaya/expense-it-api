"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var v1_1 = __importDefault(require("./v1"));
var appRouter = (0, express_1.Router)();
appRouter.use("/v1", v1_1.default);
exports.default = appRouter;
