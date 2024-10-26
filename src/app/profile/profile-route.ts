import { Router } from "express";
import {
  changePasswordController,
  getProfileController,
} from "./profile-controller";
import { VerifyUser } from "../../middleware/verifyToken";
import { validateRequest } from "middleware/validateRequest";
import { updatePasswordSchema } from "./profile-request";

const route = Router();

route.get("/", VerifyUser, getProfileController);
// route.patch("/password", VerifyUser, changePasswordController);
route.patch("/forgot-password", validateRequest(updatePasswordSchema) ,changePasswordController);

export default route;
