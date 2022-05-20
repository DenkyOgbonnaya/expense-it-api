"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
var mongoString = process.env.DATABASE_URL;
console.log(mongoString);
//connect to mongo db
mongoose_1.default.connect(mongoString, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Connected to MongoDB");
    }
});
var db = mongoose_1.default.connection;
exports.default = db;
