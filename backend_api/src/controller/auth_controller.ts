import AuthService from "@/services/auth_service";
import prisma from "@/utils/db";
import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

/**
 * AuthController class handles authentication-related operations.
 */
class AuthController {
  AuthService: AuthService;
  constructor() {
    this.AuthService = new AuthService();
  }

  /**
   * Handles user login.
   *
   * @param req - The request object.
   * @param res - The response object.
   * @returns void
   */
  public async login(req: Request, res: Response) {
    try {
      res.json({
        matchMedia: {
          data: await prisma.user.findMany(),
        },
      });
    } catch (error : any) {
      res.status(500).json({
        message: error.message,
      });
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

export default new AuthController();
