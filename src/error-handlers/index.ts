import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { BaseError } from "../errors";

function logError(err: Error) {
  console.log("llls");
  console.error(err);
}

function logErrorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // logError(err);
  console.log("Loggging error");
  next(err);
}

function returnError(err: Error, req: Request, res: Response) {
  console.log("returning error");
  if (err instanceof BaseError) {
  } else return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
}

function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (isOperationalError(err) && err instanceof BaseError) {
    return res.status(err.statusCode).send({
      status: "Error",
      message: err.message,
      error: process.env.NODE_ENV === "development" ? err : null,
    });
  }

  return res.status(500).send({
    status: "Error",
    message: err.message,
    error: process.env.NODE_ENV === "development" ? err : null,
  });
}

function isOperationalError(error) {
  if (error instanceof BaseError) {
    return error.isOperational;
  }
  return false;
}

export {
  logError,
  logErrorMiddleware,
  returnError,
  isOperationalError,
  errorHandler,
};
