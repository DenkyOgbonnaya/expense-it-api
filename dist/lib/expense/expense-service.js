"use strict";
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
exports.ExpenseService = void 0;
var expense_model_1 = __importDefault(require("./expense-model"));
var expense_service_factory_1 = __importDefault(require("./expense-service-factory"));
var ExpenseService = /** @class */ (function () {
    function ExpenseService() {
    }
    ExpenseService.prototype.editExpense = function (expenseId, userId, expense) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expense_model_1.default.findOneAndUpdate({ id: expenseId, user: userId }, { $set: expense }, { new: true })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ExpenseService.prototype.deleteExpense = function (expenseId, userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expense_model_1.default.findOneAndUpdate({ id: expenseId, user: userId }, { $set: { isDeleted: true } })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ExpenseService.prototype.getExpensesByDate = function (userId, startDate, endDate, page, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var offset, fromDate, toDate, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        offset = page + limit - limit;
                        fromDate = new Date(startDate);
                        toDate = new Date(endDate);
                        return [4 /*yield*/, expense_model_1.default.aggregate([
                                {
                                    $match: { user: userId, date: { $gte: fromDate, $lte: toDate } },
                                },
                                {
                                    $sort: { date: -1 },
                                },
                                {
                                    $group: {
                                        _id: "$date",
                                        expenses: {
                                            $push: "$$ROOT",
                                        },
                                    },
                                },
                            ])];
                    case 1:
                        res = _a.sent();
                        //   .skip(offset)
                        //   .limit(limit);
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ExpenseService.prototype.getExpenseCategories = function (userId, startDate, endDate, page, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var offset, fromDate, toDate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        offset = page + limit - limit;
                        fromDate = new Date(startDate);
                        toDate = new Date(endDate);
                        return [4 /*yield*/, expense_model_1.default.aggregate([
                                {
                                    $match: {
                                        user: userId,
                                        amount: { $gte: 10 },
                                        date: { $gte: fromDate, $lte: toDate },
                                    },
                                },
                                { $sort: { total: -1 } },
                                { $group: { _id: "$category", total: { $sum: "$amount" } } },
                            ])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ExpenseService.prototype.getTotalExpenses = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expense_model_1.default.aggregate([
                            { $match: { user: userId } },
                            { $group: { _id: null, total: { $sum: "$amount" } } },
                        ])];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res[0].total];
                }
            });
        });
    };
    ExpenseService.prototype.getTotalExpensesByDate = function (userId, startDate, endDate) {
        return __awaiter(this, void 0, void 0, function () {
            var fromDate, toDate, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fromDate = new Date(startDate);
                        toDate = new Date(endDate);
                        return [4 /*yield*/, expense_model_1.default.aggregate([
                                { $match: { user: userId, date: { $gte: fromDate, $lte: toDate } } },
                                { $group: { _id: null, total: { $sum: "$amount" } } },
                            ])];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res[0].total];
                }
            });
        });
    };
    ExpenseService.prototype.createExpense = function (expense) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expense_model_1.default.create(expense)];
                    case 1:
                        res = (_a.sent());
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ExpenseService.prototype.getExpensesByUser = function (userId, page, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var offset;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        offset = page + limit - limit;
                        return [4 /*yield*/, expense_model_1.default.find({ user: userId })
                                .skip(offset)
                                .limit(limit)
                                .sort({ createdDate: -1 })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ExpenseService.prototype.getExpense = function (expenseId, userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expense_model_1.default.findOne({ id: expenseId, user: userId })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ExpenseService.prototype.getUserExpensesCount = function (userId, startDate, endDate) {
        return __awaiter(this, void 0, void 0, function () {
            var expenseServFact;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expenseServFact = new expense_service_factory_1.default();
                        return [4 /*yield*/, expenseServFact.getUserExpenseCount(userId, startDate, endDate)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ExpenseService;
}());
exports.ExpenseService = ExpenseService;
