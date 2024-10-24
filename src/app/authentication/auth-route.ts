import { Router } from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { CatchWrapper } from "../../utils/CatchWrapper";
import { loginSchema, registerSchema } from "./auth-request";
import { loginController, registerController } from "./auth-controller";

const router = Router();

router.post(
  "/register",
  validateRequest(registerSchema),
  CatchWrapper(registerController)
);
router.post(
  "/login",
  validateRequest(loginSchema),
  CatchWrapper(loginController)
);

export default router;
