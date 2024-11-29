import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getSensorData = async (req: Request, res: Response): Promise<void> => {
  try {
    
    const data = await prisma.sensorData.findMany();

    
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching sensor data:", error);
    res.status(500).json({ message: "Failed to fetch sensor data" });
  }
};
