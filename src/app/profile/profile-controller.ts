import { NextFunction, Response } from "express";
import { RequestWithAccessToken } from "../../interface/Request";
import { ErrorApp } from "../../utils/HttpError";
import { getProfileService } from "./profile-service";
import { MESSAGES } from "../../utils/Messages";
import { MESSAGE_CODE } from "../../utils/ErrorCode";
import { HandleResponse } from "../../utils/HandleResponse";

export const getProfileController = async (
  req: RequestWithAccessToken,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req;
  const result = await getProfileService(userId ?? "");
  if (result instanceof ErrorApp) {
    next(result);
    return;
  }
  HandleResponse(
    res,
    200,
    MESSAGE_CODE.SUCCESS,
    MESSAGES.SUCCESS.USER.GET,
    result
  );
};
