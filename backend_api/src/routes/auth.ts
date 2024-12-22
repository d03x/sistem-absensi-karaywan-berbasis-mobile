/**
 * @fileoverview This file defines the authentication routes for the application.
 * It imports the necessary controller and sets up the routes for login and register.
 */

import auth_controller from "@/controller/auth_controller";
import { authorization_jwt } from "@/middlewares/authorization_jwt";
import { Router } from "express";

/**
 * Router for handling authentication-related routes.
 *
 * @constant
 * @type {Router}
 */
const AuthRoute = Router();

/**
 * Route for user login.
 *
 * @name POST /login
 * @function
 * @memberof module:routes/auth~AuthRoute
 * @inner
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Function} next - Express next middleware function
 */
AuthRoute.post("/login", auth_controller.login);
/**
 * Route for user registration.
 *
 * @name POST /register
 * @function
 * @memberof module:routes/auth~AuthRoute
 * @inner
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Function} next - Express next middleware function
 */
AuthRoute.post("/register", auth_controller.register);

export default AuthRoute;
