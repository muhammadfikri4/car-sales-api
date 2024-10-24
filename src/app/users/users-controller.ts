import { NextFunction, Request, Response } from "express";
import { getUserService } from "./users-service";
import { ErrorApp } from "../../utils/HttpError";
import { HandleResponse } from "../../utils/HandleResponse";
import { MESSAGE_CODE } from "../../utils/ErrorCode";
import { MESSAGES } from "../../utils/Messages";

export const getUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { query } = req;
  const result = await getUserService(query);
  if (result instanceof ErrorApp) {
    next(result);
    return;
  }
  HandleResponse(
    res,
    200,
    MESSAGE_CODE.SUCCESS,
    MESSAGES.SUCCESS.USER.GET,
    result.data,
    result.meta
  );
};
