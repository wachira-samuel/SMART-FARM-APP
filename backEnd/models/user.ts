import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CreateUserInput {
  username: string;
  email: string;
  password: string;
  role?: string;
}

async function createUser(data: CreateUserInput) {
  try {
    const user = await prisma.user.create({
      data: {
        name: data.username,
        email: data.email,
        password: data.password,
      },
    });
    console.log("User created:", user);
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    console.log("User found:", user);
    return user;
  } catch (error) {
    console.error("Error finding user:", error);
  }
}


