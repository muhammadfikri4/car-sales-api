import { Router } from "express";
import { CatchWrapper } from "../../utils/CatchWrapper";
import { getUsersController } from "./users-controller";

const router = Router();

router.get('/', CatchWrapper(getUsersController))

export default router;
