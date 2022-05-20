import httpStatus from "http-status";
import BaseError from "./base-error";

class Forbidden extends BaseError {
  constructor(
    name: string = "Forbidden Action",
    message = "You are forbidden from performing this action",
    statusCode: number = httpStatus.FORBIDDEN,
    isOperational: boolean = true
  ) {
    super(name, message, statusCode, isOperational);
  }
}

export default Forbidden;
