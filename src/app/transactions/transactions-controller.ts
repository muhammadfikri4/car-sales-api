import { NextFunction, Response } from "express";
import { RequestWithAccessToken } from "../../interface/Request";
import { MESSAGE_CODE } from "../../utils/ErrorCode";
import { HandleResponse } from "../../utils/HandleResponse";
import { ErrorApp } from "../../utils/HttpError";
import { MESSAGES } from "../../utils/Messages";
import {
  createTransactionService,
  getTransactionsService,
} from "./transactions-service";

export const createTransactionController = async (
  req: RequestWithAccessToken,
  res: Response,
  next: NextFunction
) => {
  const { body, userId } = req;
  const transaction = await createTransactionService(body, userId ?? "");
  if (transaction instanceof ErrorApp) {
    next(transaction);
    return;
  }
  HandleResponse(res, 201, MESSAGE_CODE.SUCCESS, MESSAGES.CREATED.TRANSACTION);
};

export const getTransactionController = async (
  req: RequestWithAccessToken,
  res: Response,
  next: NextFunction
) => {
  const { query, userId } = req;
  const result = await getTransactionsService(query, userId ?? "");
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
