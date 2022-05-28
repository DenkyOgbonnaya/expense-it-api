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
var http_status_1 = __importDefault(require("http-status"));
var response_status_1 = require("../../utills/response-status");
var expenseController = function (service) { return ({
    createExpense: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var data, expense, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data = __assign(__assign({}, req.body), { user: req.params.userId, date: new Date(req.body.date) });
                        return [4 /*yield*/, service.createExpense(data)];
                    case 1:
                        expense = _a.sent();
                        res.status(http_status_1.default.CREATED).send({
                            status: response_status_1.responseStatus.SUCCESS,
                            message: "Expense added",
                            data: expense,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        next(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    editExpense: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, userId, expenseId, data, expense, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.params, userId = _a.userId, expenseId = _a.expenseId;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        data = req.body;
                        return [4 /*yield*/, service.editExpense(expenseId, userId, data)];
                    case 2:
                        expense = _b.sent();
                        res.status(http_status_1.default.OK).send({
                            status: response_status_1.responseStatus.SUCCESS,
                            message: "Expense edited",
                            data: expense,
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        next(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    deleteExpense: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, userId, expenseId, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.params, userId = _a.userId, expenseId = _a.expenseId;
                        return [4 /*yield*/, service.deleteExpense(expenseId, userId)];
                    case 1:
                        _b.sent();
                        res.status(http_status_1.default.OK).send({
                            status: response_status_1.responseStatus.SUCCESS,
                            message: "Expense deleted",
                            data: null,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _b.sent();
                        next(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    getExpensesByDate: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, _a, startDate, endDate, _b, page, _c, limit, data, count, error_4;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 3, , 4]);
                        userId = req.params.userId;
                        _a = req.query, startDate = _a.startDate, endDate = _a.endDate, _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 10 : _c;
                        return [4 /*yield*/, service.getExpensesByDate(userId, startDate, endDate, page, limit)];
                    case 1:
                        data = _d.sent();
                        return [4 /*yield*/, service.getUserExpensesCount(userId, startDate, endDate)];
                    case 2:
                        count = _d.sent();
                        res.status(http_status_1.default.OK).send({
                            status: response_status_1.responseStatus.SUCCESS,
                            message: "",
                            data: data,
                            totalCount: count
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _d.sent();
                        next(error_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    getExpenseCategories: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, _a, startDate, endDate, _b, page, _c, limit, data, error_5;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        userId = req.params.userId;
                        _a = req.query, startDate = _a.startDate, endDate = _a.endDate, _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 10 : _c;
                        return [4 /*yield*/, service.getExpenseCategories(userId, startDate, endDate, page, limit)];
                    case 1:
                        data = _d.sent();
                        res.status(http_status_1.default.OK).send({
                            status: response_status_1.responseStatus.SUCCESS,
                            message: "",
                            data: data,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _d.sent();
                        next(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    getTotalExpenses: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, service.getTotalExpenses(req.params.userId)];
                    case 1:
                        data = _a.sent();
                        res.status(http_status_1.default.OK).send({
                            status: response_status_1.responseStatus.SUCCESS,
                            message: "",
                            data: data,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        next(error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    getTotalExpensesByDate: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, startDate, endDate, data, error_7;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.query, startDate = _a.startDate, endDate = _a.endDate;
                        return [4 /*yield*/, service.getTotalExpensesByDate(req.params.userId, startDate, endDate)];
                    case 1:
                        data = _b.sent();
                        res.status(http_status_1.default.OK).send({
                            status: response_status_1.responseStatus.SUCCESS,
                            message: "",
                            data: data,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_7 = _b.sent();
                        next(error_7);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    getExpensesByUser: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, _a, page, limit, data, error_8;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        userId = req.params.userId;
                        _a = req.query, page = _a.page, limit = _a.limit;
                        return [4 /*yield*/, service.getExpensesByUser(userId, page, limit)];
                    case 1:
                        data = _b.sent();
                        res.status(http_status_1.default.OK).send({
                            status: response_status_1.responseStatus.SUCCESS,
                            message: "",
                            data: data,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_8 = _b.sent();
                        next(error_8);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    getExpense: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, userId, expenseId, data, error_9;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.params, userId = _a.userId, expenseId = _a.expenseId;
                        return [4 /*yield*/, service.getExpense(expenseId, userId)];
                    case 1:
                        data = _b.sent();
                        res.status(http_status_1.default.OK).send({
                            status: response_status_1.responseStatus.SUCCESS,
                            message: "",
                            data: data,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_9 = _b.sent();
                        next(error_9);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
}); };
exports.default = expenseController;
