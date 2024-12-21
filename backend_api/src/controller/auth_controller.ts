import knex from "@/database/knex";
import AuthService from "@/services/auth_service";
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
    const users = await knex("users").select("*");
    res.json({
      matchMedia: users,
    });
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
