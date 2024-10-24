import { NextFunction, type Request, type Response } from "express";
import {
  JsonWebTokenError,
  TokenExpiredError,
  decode,
  verify,
} from "jsonwebtoken";
import { TokenDecodeInterface } from "../interface";
import { RequestWithAccessToken } from "../interface/Request";
import { config } from "../libs";
import { userRepository } from "../repository";
import { MESSAGE_CODE } from "../utils/ErrorCode";
import { HandleResponse } from "../utils/HandleResponse";
import { ErrorApp } from "../utils/HttpError";
import { MESSAGES } from "../utils/Messages";

export const VerifyToken =
  () =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req?.headers?.authorization?.replace("Bearer ", "");

      if (!token) {
        return HandleResponse(
          res,
          401,
          MESSAGE_CODE.UNAUTHORIZED,
          MESSAGES.ERROR.UNAUTHORIZED.FORBIDDEN
        );
      }
      const decoded = decode(token) as TokenDecodeInterface;
      console.log({
        token,
      });
      let errno: ErrorApp | undefined;
      verify(token, config.JWT_SECRET as string, (err: unknown) => {
        if (err) {
          console.log(err)
          if (err instanceof TokenExpiredError) {
            errno = new ErrorApp(
              MESSAGES.ERROR.UNAUTHORIZED.EXPIRED,
              401,
              MESSAGE_CODE.UNAUTHORIZED
            );
            return;
          }
          if (err instanceof JsonWebTokenError) {
            errno = new ErrorApp(err.message, 401, MESSAGE_CODE.UNAUTHORIZED);
            return;
          }
          errno = new ErrorApp(
            MESSAGES.ERROR.INVALID.TOKEN,
            401,
            MESSAGE_CODE.UNAUTHORIZED
          );
        }
      });

      if (errno) {
        next(errno);
        return;
      }
      if (!decoded?.userId) {
        return HandleResponse(
          res,
          401,
          MESSAGE_CODE.UNAUTHORIZED,
          MESSAGES.ERROR.UNAUTHORIZED.RECOGNIZED
        );
      }

      const user = await userRepository.getUserById(decoded?.userId);
      if (!user) {
        return HandleResponse(
          res,
          401,
          MESSAGE_CODE.UNAUTHORIZED,
          MESSAGES.ERROR.UNAUTHORIZED.RECOGNIZED
        );
      }
      // if (!roles.includes(user.role)) {
      //   return HandleResponse(
      //     res,
      //     403,
      //     MESSAGE_CODE.UNAUTHORIZED,
      //     MESSAGES.ERROR.FORBIDDEN.ROLE
      //   );
      // }
      (req as RequestWithAccessToken).userId = decoded?.userId;
      next();
    } catch (error) {
      console.log(error);
    }
  };