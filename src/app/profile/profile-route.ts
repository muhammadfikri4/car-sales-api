import { Router } from "express";
import {
  changePasswordController,
  getProfileController,
} from "./profile-controller";
import { VerifyUser } from "../../middleware/verifyToken";

const route = Router();

route.get("/", VerifyUser, getProfileController);
// route.patch("/password", VerifyUser, changePasswordController);
route.patch("/forgot-password", changePasswordController);

export default route;
