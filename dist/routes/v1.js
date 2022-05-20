"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_routes_1 = __importDefault(require("../lib/user/user-routes"));
var v1Routes = (0, express_1.Router)();
v1Routes.get("/", function (_, res) {
    res.send("Welcome to ExpenseIt API V1");
});
v1Routes.use("/users", user_routes_1.default);
exports.default = v1Routes;
