import * as bcrypt from "bcrypt";
import { userRepository } from "../../repository";
import { MESSAGE_CODE } from "../../utils/ErrorCode";
import { ErrorApp } from "../../utils/HttpError";
import { MESSAGES } from "../../utils/Messages";
import { LoginBodyDAO, RegisterBodyDAO } from "./auth-dao";

export const registerService = async (data: RegisterBodyDAO) => {
  const userExist = await userRepository.getUserByEmail(data.email);

  if (userExist) {
    return new ErrorApp(
      MESSAGES.ERROR.ALREADY.USER,
      400,
      MESSAGE_CODE.BAD_REQUEST
    );
  }

  const password = await bcrypt.hash(data.password, 10);

  const result = await userRepository.createUser({
    email: data.email,
    name: data.email,
    password,
  });

  return result;
};

export const loginService = async (data: LoginBodyDAO) => {
  const user = await userRepository.getUserByEmail(data.email);
  if (!user) {
    return new ErrorApp(
      MESSAGES.ERROR.NOT_FOUND.USER.ACCOUNT,
      404,
      MESSAGE_CODE.NOT_FOUND
    );
  }
  const isValidPassword = await bcrypt.compare(data.password, user.password);
  if (!isValidPassword) {
    return new ErrorApp(
      MESSAGES.ERROR.INVALID.USER.PASSWORD,
      400,
      MESSAGE_CODE.BAD_REQUEST
    );
  }
  // const accessToken = GenerateToken(user.id);

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};
