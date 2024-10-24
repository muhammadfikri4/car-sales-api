import { Router } from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { createTransactionController, getTransactionController } from "./transactions-controller";
import { createTransactionSchema } from "./transactions-request";

const route = Router();

route.post(
  "/",
  validateRequest(createTransactionSchema),
  createTransactionController
);
route.get(
  "/",
  getTransactionController
);

export default route;
