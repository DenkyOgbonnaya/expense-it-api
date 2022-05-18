"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import "./database/index"
var app = (0, express_1.default)();
var PORT = process.env.PORT || 8080;
app.use(express_1.default.json());
app.get("/", function (req, res) {
    res.send("Hello World");
});
app.listen(PORT, function () { return console.log("Server runing on port", PORT); });
