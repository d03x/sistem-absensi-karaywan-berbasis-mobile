import AuthService from "@/services/auth_service";
import prisma from "@/utils/db";
import apiResponse from "@/utils/response";
import { response, type Request, type Response } from "express";

/**
 * AuthController class handles authentication-related operations.
 */
class AuthController {
  public auth_service: AuthService;
  constructor(authService: AuthService) {
    this.auth_service = authService;
    this.login = this.login.bind(this);
  }

  /**
   * Handles user login.
   *
   * @param req - The request object.
   * @param res - The response object.
   * @returns void
   */
  public async login(req: Request, res: Response) {
    const data = await this.auth_service.login();
    try {
      apiResponse(res, {
        status: 200,
        data,
        message: "User login successful",
      });
    } catch (error: any) {
      res.status(500).json({
        message: error.message,
      });
    } finally {
      this.auth_service._destroy();
    }
  }

  /**
   * Handles user registration.
   *
   * @param req - The request object.
   * @param res - The response object.
   * @returns void
   */
  public register(req: Request, res: Response): void {
    res.json({
      matchMedia: "register",
    });
  }
}

export default new AuthController(new AuthService(prisma));
