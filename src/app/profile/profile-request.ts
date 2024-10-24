import Joi from "joi";
import { MESSAGES } from "../../utils/Messages";

export const updatePasswordSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "any.required": MESSAGES.ERROR.REQUIRED.EMAIL
    }),
    newPassword: Joi.string().required().messages({
        "any.required": MESSAGES.ERROR.REQUIRED.PASSWORD
    })
})