class BaseError extends Error {
  name: string = "Server Error";
  message: string = "Internal Server Error";
  statusCode: number = 500;
  isOperational = true;

  constructor(
    name: string,
    message: string,
    statusCode: number,
    isOperational: boolean
  ) {
    super(message);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.message = message;

    Error.captureStackTrace(this);
  }
}

export default BaseError;
