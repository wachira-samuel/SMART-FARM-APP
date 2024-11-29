import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const newUser = await prisma.user.create({
      data: {
        name: req.body.username,
        email: req.body.email,
        password: req.body.password, 
        
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(400).json({ message: "User registration failed" });
  }
};


export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.password) { 
      res.status(401).json({ message: "Invalid email or password" });
    }

    

    
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during user login:", error);
    res.status(500).json({ message: "Login failed" });
  }
};