"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGetSingleExpense = exports.validateGetTotalUserExpense = exports.validateGetExpenseByDate = exports.validateDeleteExpense = exports.validateCreateExpense = void 0;
var joi_1 = __importDefault(require("joi"));
var errors_1 = require("../../errors");
var validateCreateExpense = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, joi_1.default
                        .object({
                        title: joi_1.default
                            .string()
                            .required()
                            .max(50)
                            .error(new errors_1.BadRequest("Expense title is required")),
                        amount: joi_1.default
                            .number()
                            .required()
                            .error(new errors_1.BadRequest("Expense amount required")),
                        date: joi_1.default
                            .string()
                            .required()
                            .error(new errors_1.BadRequest("Expense date required")),
                        category: joi_1.default
                            .string()
                            .error(new errors_1.BadRequest("Expense user is required")),
                    })
                        .validateAsync(req.body)];
            case 1:
                _a.sent();
                next();
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.validateCreateExpense = validateCreateExpense;
var validateDeleteExpense = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, joi_1.default
                        .object({
                        userId: joi_1.default
                            .string()
                            .required()
                            .error(new errors_1.BadRequest("user ID param was not provided")),
                        expenseId: joi_1.default
                            .number()
                            .required()
                            .error(new errors_1.BadRequest("ExpenseId param was not provided")),
                    })
                        .validateAsync(req.params)];
            case 1:
                _a.sent();
                next();
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.validateDeleteExpense = validateDeleteExpense;
var validateGetExpenseByDate = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = __assign(__assign({}, req.params), req.query);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, joi_1.default
                        .object({
                        userId: joi_1.default
                            .string()
                            .required()
                            .error(new errors_1.BadRequest("user ID param was not provided")),
                        startDate: joi_1.default
                            .string()
                            .required()
                            .error(new errors_1.BadRequest("Start date query string required")),
                        endDate: joi_1.default
                            .string()
                            .required()
                            .error(new errors_1.BadRequest("End date query string required")),
                    })
                        .validateAsync(data)];
            case 2:
                _a.sent();
                next();
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.validateGetExpenseByDate = validateGetExpenseByDate;
var validateGetTotalUserExpense = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, joi_1.default
                        .object({
                        userId: joi_1.default
                            .string()
                            .required()
                            .error(new errors_1.BadRequest("user ID param was not provided")),
                    })
                        .validateAsync(req.params)];
            case 1:
                _a.sent();
                next();
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.validateGetTotalUserExpense = validateGetTotalUserExpense;
var validateGetSingleExpense = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, joi_1.default
                        .object({
                        userId: joi_1.default
                            .string()
                            .required()
                            .error(new errors_1.BadRequest("user ID param was not provided")),
                        expenseId: joi_1.default
                            .string()
                            .required()
                            .error(new errors_1.BadRequest("expense ID param was not provided")),
                    })
                        .validateAsync(req.params)];
            case 1:
                _a.sent();
                next();
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                next(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.validateGetSingleExpense = validateGetSingleExpense;