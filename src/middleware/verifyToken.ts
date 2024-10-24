import { NextFunction, type Request, type Response } from "express";
import { RequestWithAccessToken } from "../interface/Request";
import { MESSAGE_CODE } from "../utils/ErrorCode";
import { HandleResponse } from "../utils/HandleResponse";
import { MESSAGES } from "../utils/Messages";

export const VerifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const USERID = req.header('User-ID');
  console.log(USERID)
  if (!USERID) {
    return HandleResponse(
      res,
      401,
      MESSAGE_CODE.UNAUTHORIZED,
      MESSAGES.ERROR.UNAUTHORIZED.AUTH
    );
  }
  (req as RequestWithAccessToken).userId = USERID as string;
  next();
};
