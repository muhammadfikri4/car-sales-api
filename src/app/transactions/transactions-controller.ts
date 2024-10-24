import { NextFunction, Request, Response } from "express";
import {
  createTransactionService,
  getTransactionsService,
} from "./transactions-service";
import { ErrorApp } from "../../utils/HttpError";
import { HandleResponse } from "../../utils/HandleResponse";
import { MESSAGE_CODE } from "../../utils/ErrorCode";
import { MESSAGES } from "../../utils/Messages";

export const createTransactionController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  const transaction = await createTransactionService(body);
  if (transaction instanceof ErrorApp) {
    next(transaction);
    return;
  }
  HandleResponse(res, 201, MESSAGE_CODE.SUCCESS, MESSAGES.CREATED.TRANSACTION);
};

export const getTransactionController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { query } = req;
  const result = await getTransactionsService(query);
  if (result instanceof ErrorApp) {
    next(result);
    return;
  }
  HandleResponse(
    res,
    200,
    MESSAGE_CODE.SUCCESS,
    MESSAGES.SUCCESS.TRANSACTION.GET,
    result
  );
};
