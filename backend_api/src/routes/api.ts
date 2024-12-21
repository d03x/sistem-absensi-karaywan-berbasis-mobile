import { Router } from "express";
import AuthRoute from "@route/auth";
const ApiRoute = Router();

ApiRoute.use("/auth", AuthRoute);

export default ApiRoute;
