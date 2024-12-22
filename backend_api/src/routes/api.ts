import { Router } from "express";
import AuthRoute from "@route/auth";
import { authorization_jwt } from "@/middlewares/authorization_jwt";
import auth_controller from "@/controller/auth_controller";
const ApiRoute = Router();

ApiRoute.use("/auth", AuthRoute);
ApiRoute.get("/dadan", authorization_jwt, auth_controller.getUserInfo);

export default ApiRoute;
