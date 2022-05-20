"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_1 = __importDefault(require("http-status"));
var base_error_1 = __importDefault(require("./base-error"));
var Unauthorized = /** @class */ (function (_super) {
    __extends(Unauthorized, _super);
    function Unauthorized(name, message, statusCode, isOperational) {
        if (name === void 0) { name = "Unathorized Action"; }
        if (message === void 0) { message = "You are not authorized to perform this action"; }
        if (statusCode === void 0) { statusCode = http_status_1.default.UNAUTHORIZED; }
        if (isOperational === void 0) { isOperational = true; }
        return _super.call(this, name, message, statusCode, isOperational) || this;
    }
    return Unauthorized;
}(base_error_1.default));
exports.default = Unauthorized;
