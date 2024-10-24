import * as bcrypt from "bcrypt";
import { MESSAGE_CODE } from "../../utils/ErrorCode";
import { ErrorApp } from "../../utils/HttpError";
import { MESSAGES } from "../../utils/Messages";
import {
    getUserByEmailUserId,
    getUserById,
    updatePassword
} from "../users/users-repository";
import { ChangePasswordDTO } from "./profile-dto";
import { getProfileDTOMapper } from "./profile-mapper";

export const getProfileService = async (userId: string) => {
  const user = await getUserById(userId);
  if (!user) {
    return new ErrorApp(
      MESSAGES.ERROR.NOT_FOUND.USER.ACCOUNT,
      404,
      MESSAGE_CODE.NOT_FOUND
    );
  }
  const data = getProfileDTOMapper(user);
  return data;
};

export const changePasswordProfileService = async (
  userId: string,
  body: ChangePasswordDTO
) => {
  const user = await getUserByEmailUserId(body.email, userId);
  if (!user) {
    return new ErrorApp(
      MESSAGES.ERROR.NOT_FOUND.USER.ACCOUNT,
      404,
      MESSAGE_CODE.NOT_FOUND
    );
  }
  const password = await bcrypt.hash(body.newPassword, 10);

  const result = await updatePassword(user.id, password);
  return result
};
