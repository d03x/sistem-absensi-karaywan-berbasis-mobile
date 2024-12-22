import prisma from "@/utils/db";
import { createToken } from "@/utils/jwt";
import { comparePassword } from "@/utils/password";
import { Prisma, type PrismaClient, type User } from "@prisma/client";

class AuthService {
  public prisma: PrismaClient;
  constructor(prisma: any) {
    this.prisma = prisma;
  }
  /**
   * login
   */
  public async login(email: string, password: string) {
    try {
      console.log(email);
      const user: User[] = await this.prisma.$queryRaw<User[]>(
        Prisma.sql`SELECT * FROM users WHERE email=${email} LIMIT 1`
      );
      const userdata = user[0] as User;
      if (!userdata.active) {
        return {
          status: 401,
          message: "User is not active",
        };
      }
      if (comparePassword(password, userdata.password)) {
        const token = createToken({
          email: userdata.email,
          id: userdata.id,
          companny_id: userdata.compannyId,
        });
        return {token,userdata};
      }
      return userdata;
    } catch (error: any) {
      console.warn(error);
    }
  }
  _destroy() {
    this.prisma.$disconnect();
  }
}

export default AuthService;
