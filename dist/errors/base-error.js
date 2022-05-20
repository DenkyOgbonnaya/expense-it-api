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
Object.defineProperty(exports, "__esModule", { value: true });
var BaseError = /** @class */ (function (_super) {
    __extends(BaseError, _super);
    function BaseError(name, message, statusCode, isOperational) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.name = "Server Error";
        _this.message = "Internal Server Error";
        _this.statusCode = 500;
        _this.isOperational = true;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        _this.name = name;
        _this.statusCode = statusCode;
        _this.isOperational = isOperational;
        _this.message = message;
        Error.captureStackTrace(_this);
        return _this;
    }
    return BaseError;
}(Error));
exports.default = BaseError;
