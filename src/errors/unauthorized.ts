import httpStatus from "http-status";
import BaseError from "./base-error";

class Unauthorized extends BaseError {
  constructor(
    name: string = "Unathorized Action",
    message = "You are not authorized to perform this action",
    statusCode: number = httpStatus.UNAUTHORIZED,
    isOperational: boolean = true
  ) {
    super(name, message, statusCode, isOperational);
  }
}

export default Unauthorized;
