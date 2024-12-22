import AuthService from "@/services/auth_service";
import prisma from "@/utils/db";
import apiResponse from "@/utils/response";
import { response, type Request, type Response } from "express";

// Define the AuthController class.
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
    try {
      // Call the login method from the AuthService class
      const { token, userdata }: any = await this.auth_service.login(
        req.body.email,
        req.body.password
      );
      // Send the response
      apiResponse(res, {
        status: 200,
        data: {
          token: token,
          user: userdata,
        },
        message: "User login successful",
      });
    } catch (error: any) {
      apiResponse(res, {
        status: 500,
        error: error,
        message: error.message,
      });
    } finally {
      this.auth_service._destroy();
    }
  }
  public getUserInfo(reqeust : Request,response : Response){
    response.json({
      status : true,
    })
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
