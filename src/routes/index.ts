import { Router, type Request, type Response } from "express";
import { VerifyUser } from "../middleware/verifyToken";
import authRoute from "../app/authentication/auth-route";
import transactionRoute from "../app/transactions/transactions-route";
import userRoute from "../app/users/users-route";
import profileRoute from "../app/profile/profile-route";
import { MESSAGE_CODE } from "../utils/ErrorCode";
import { MESSAGES } from "../utils/Messages";

const route = Router();

route.use("/auth", authRoute);
route.use("/users", VerifyUser, userRoute);
route.use("/transactions", VerifyUser, transactionRoute);
route.use("/profile", VerifyUser, profileRoute);

route.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Welcome to Car Sales API 🚀" });
});

route.use("*", (req: Request, res: Response) => {
  return res.status(404).json({
    status: 404,
    code: MESSAGE_CODE.NOT_FOUND,
    message: MESSAGES.ERROR.NOT_FOUND.ROUTE,
  });
});

export default route;
