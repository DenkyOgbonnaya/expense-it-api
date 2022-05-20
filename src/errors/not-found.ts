import httpStatus from "http-status";
import BaseError from "./base-error";

class NotFound extends BaseError {
  constructor(
    name: string = "Not Found",
    message = "Resource Not Found",
    statusCode: number = httpStatus.NOT_FOUND,
    isOperational: boolean = true
  ) {
    super(name, message, statusCode, isOperational);
  }
}

export default NotFound;
