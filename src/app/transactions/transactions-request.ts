import Joi from "joi";
import { MESSAGES } from "../../utils/Messages";

export const createTransactionSchema = Joi.object({
    buyerName: Joi.string().required().messages({
        "any.required": MESSAGES.ERROR.REQUIRED.NAME,
    }),
    merk: Joi.string().required().messages({
        "any.required": MESSAGES.ERROR.REQUIRED.MERK,
    }),
    carCode: Joi.string().required().messages({
        "any.required": MESSAGES.ERROR.REQUIRED.CAR_CODE,
    }),
    color: Joi.string().required().messages({
        "any.required": MESSAGES.ERROR.REQUIRED.COLOR,
    }),
    year: Joi.number().required().messages({
        "any.required": MESSAGES.ERROR.REQUIRED.YEAR,
    }),
    price: Joi.number().required().messages({
        "any.required": MESSAGES.ERROR.REQUIRED.PRICE,
    }),
    carName: Joi.string().required().messages({
        "any.required": MESSAGES.ERROR.REQUIRED.CAR_NAME,
    }),
})