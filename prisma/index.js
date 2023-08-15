import { prisma } from "./prisma/client.js";

async function getUsers() {
  const users = await prisma.user.findMany();
  console.log(users);
}

getUsers();
