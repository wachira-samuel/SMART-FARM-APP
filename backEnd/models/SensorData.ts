import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createSensorData() {
  try {
    const sensorData = await prisma.sensorData.create({
      data: {
        data: {
          temperature: 23.5,
          humidity: 45.0,
        },
        timestamp: new Date(),
      },
    });

    console.log("Sensor Data Created:", sensorData);
  } catch (error) {
    console.error("Error creating sensor data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createSensorData();
