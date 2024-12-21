import prisma from "@/utils/db";
import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { hashPassword } from "@/utils/password";
async function main() {
  const company = await prisma.companny.create({
    data: {
      name: faker.company.name(),
      email: faker.internet.exampleEmail(),
      address: faker.location.streetAddress(),
      phone: faker.phone.number(),
      website: faker.internet.url(),
      company_logo: faker.image.avatarGitHub(),
    },
  });
  console.log(`Created company with id: ${company.id}`);

  const user = await prisma.user.create({
    data: {
      email: faker.internet.email(),
      name: faker.person.fullName(),
      password: hashPassword("password"),
      role: "ADMIN",
      compannyId: company.id,
      picture: faker.image.avatar(),
    },
  });
  console.log(`Created company with id: ${user.id}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
