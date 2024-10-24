import { Router } from "express";
import { getProfileController } from "./profile-controller";

const route = Router();

route.get("/", getProfileController);

export default route;
