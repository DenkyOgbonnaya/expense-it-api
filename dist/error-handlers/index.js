"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.isOperationalError = exports.returnError = exports.logErrorMiddleware = exports.logError = void 0;
var http_status_1 = __importDefault(require("http-status"));
var errors_1 = require("../errors");
function logError(err) {
    console.log("llls");
    console.error(err);
}
exports.logError = logError;
function logErrorMiddleware(err, req, res, next) {
    logError(err);
    next(err);
}
exports.logErrorMiddleware = logErrorMiddleware;
function returnError(err, req, res) {
    console.log("returning error");
    if (err instanceof errors_1.BaseError) {
    }
    else
        return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send(err.message);
}
exports.returnError = returnError;
function errorHandler(err, req, res, next) {
    if (isOperationalError(err) && err instanceof errors_1.BaseError) {
        return res.status(err.statusCode).send({
            status: "Error",
            message: err.message,
            error: process.env.NODE_ENV === "development" ? err : null,
        });
    }
    return res.status(500).send({
        status: "Error",
        message: err.message,
        error: process.env.NODE_ENV === "development" ? err : null,
    });
}
exports.errorHandler = errorHandler;
function isOperationalError(error) {
    if (error instanceof errors_1.BaseError) {
        return error.isOperational;
    }
    return false;
}
exports.isOperationalError = isOperationalError;
