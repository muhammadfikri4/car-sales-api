import { Router, type Request, type Response } from "express";
import authRoute from "../app/authentication/auth-route";
import userRoute from "../app/users/users-route";
import { VerifyToken } from "../middleware/verifyToken";
import { MESSAGE_CODE } from "../utils/ErrorCode";
import { MESSAGES } from "../utils/Messages";

const route = Router();

route.use("/auth", authRoute);
route.use("/users", VerifyToken(), userRoute);
// route.use(
//   "/profile",
//   profileRoute
// );

route.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Hello World 🚀" });
});

route.use("*", (req: Request, res: Response) => {
  return res.status(404).json({
    status: 404,
    code: MESSAGE_CODE.NOT_FOUND,
    message: MESSAGES.ERROR.NOT_FOUND.ROUTE,
  });
});

export default route;
