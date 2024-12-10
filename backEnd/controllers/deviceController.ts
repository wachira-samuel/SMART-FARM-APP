import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getAllDevices = async (req: Request, res: Response): Promise<void> => {
  try {
    
    const devices = await prisma.device.findMany();


    res.status(200).json(devices);
  } catch (error) {
    console.error("Error fetching devices:", error);
    res.status(500).json({ message: "Failed to fetch devices" });
  }
};
