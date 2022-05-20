"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var error_handlers_1 = require("./error-handlers");
var routes_1 = __importDefault(require("./routes"));
require("./database/index");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 8080;
app.use(express_1.default.json());
app.use("/api", routes_1.default);
app.get("/", function (req, res) {
    res.send("Hello World");
});
app.use(error_handlers_1.logErrorMiddleware);
app.use(error_handlers_1.errorHandler);
process.on("uncaughtException", function (error) {
    (0, error_handlers_1.logError)(error);
    process.exit(1);
});
process.on("unhandledRejection", function (error) {
    console.log("errosr");
    process.exit(1);
});
app.listen(PORT, function () { return console.log("Server runing on port", PORT); });
