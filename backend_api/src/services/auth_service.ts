import prisma from "@/utils/db";

class AuthService {
  public prisma: any;
  constructor(prisma: any) {
    this.prisma = prisma;
  }
  /**
   * login
   */
  public async login() {
    return await this.prisma.user.findMany();
  }
  _destroy() {
    this.prisma.$disconnect();
  }
}

export default AuthService;
