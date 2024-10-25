import Joi from "joi";
import { MESSAGES } from "../../utils/Messages";

export const createTransactionSchema = Joi.object({
  transactionDate: Joi.string().optional().messages({
    "any.string": MESSAGES.ERROR.REQUIRED.STRING,
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
  fakturNumber: Joi.string().required().messages({
    "any.required": MESSAGES.ERROR.REQUIRED.FAKTUR_NUMBER,
  }),
  buyerName: Joi.string().required().messages({
    "any.required": MESSAGES.ERROR.REQUIRED.BUYER_NAME,
  }),
  buyerAddress: Joi.string().required().messages({
    "any.required": MESSAGES.ERROR.REQUIRED.BUYER_ADDRESS,
  }),
  buyerCode: Joi.string().required().messages({
    "any.required": MESSAGES.ERROR.REQUIRED.BUYER_CODE,
  }),
  buyerJob: Joi.string().required().messages({
    "any.required": MESSAGES.ERROR.REQUIRED.BUYER_CODE,
  }),
  buyerPhoneNumber: Joi.string().required().messages({
    "any.required": MESSAGES.ERROR.REQUIRED.BUYER_PHONE_NUMBER,
  }),
});
