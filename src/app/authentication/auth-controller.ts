import { type NextFunction, type Request, type Response } from "express";
import { loginService, registerService } from "./auth-service";
import { ErrorApp } from "../../utils/HttpError";
import { HandleResponse } from "../../utils/HandleResponse";
import { MESSAGE_CODE } from "../../utils/ErrorCode";
import { MESSAGES } from "../../utils/Messages";

export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  console.log({body})
  const user = await registerService(body);
  if (user instanceof ErrorApp) {
    next(user);
    return;
  }
  HandleResponse(res, 201, MESSAGE_CODE.SUCCESS, MESSAGES.CREATED.USER.ACCOUNT);
};

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  console.log({body})
  const user = await loginService(body);
  if (user instanceof ErrorApp) {
    next(user);
    return;
  }
  HandleResponse(
    res,
    201,
    MESSAGE_CODE.SUCCESS,
    MESSAGES.SUCCESS.AUTH.SIGN_IN,
    user
  );
};
