import httpStatus from "http-status";
import BaseError from "./base-error";

class BadRequest extends BaseError {
  constructor(
    message = "Bad Request",
    name: string = "Bad Request",
    statusCode: number = 400,
    isOperational: boolean = true
  ) {
    super(name, message, statusCode, isOperational);
  }
}

export default BadRequest;
