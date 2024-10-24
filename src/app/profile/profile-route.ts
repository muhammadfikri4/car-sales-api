import { Router } from "express";
import {
  changePasswordController,
  getProfileController,
} from "./profile-controller";

const route = Router();

route.get("/", getProfileController);
route.patch("/password", changePasswordController);

export default route;
