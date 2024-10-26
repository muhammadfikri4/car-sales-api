import { NextFunction, type Request, type Response } from "express";
import { RequestWithAccessToken } from "../interface/Request";
import { MESSAGE_CODE } from "../utils/ErrorCode";
import { HandleResponse } from "../utils/HandleResponse";
import { MESSAGES } from "../utils/Messages";
import { getUserById } from "../app/users/users-repository";

export const VerifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const USERID = req.header("User-ID");
  console.log(USERID);
  if (!USERID) {
    return HandleResponse(
      res,
      401,
      MESSAGE_CODE.UNAUTHORIZED,
      MESSAGES.ERROR.UNAUTHORIZED.AUTH
    );
  }
  const user = await getUserById(USERID);
  if (!user) {
    return HandleResponse(
      res,
      401,
      MESSAGE_CODE.NOT_FOUND,
      MESSAGES.ERROR.NOT_FOUND.USER.ACCOUNT
    );
  }
  (req as RequestWithAccessToken).userId = USERID as string;
  next();
};
