import Joi from "joi";
import { MESSAGES } from "../../utils/Messages";

export const registerSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": MESSAGES.ERROR.REQUIRED.NAME,
  }),
  email: Joi.string().required().messages({
    "any.required": MESSAGES.ERROR.REQUIRED.EMAIL,
  }),
  password: Joi.string().required().messages({
    "any.required": MESSAGES.ERROR.REQUIRED.PASSWORD,
  }),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": MESSAGES.ERROR.REQUIRED.EMAIL,
  }),
  password: Joi.string().required().messages({
    "any.required": MESSAGES.ERROR.REQUIRED.PASSWORD,
  })
});
