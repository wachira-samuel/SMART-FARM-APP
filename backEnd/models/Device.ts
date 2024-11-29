import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createDevice() {
  try {
    const newDevice = await prisma.device.create({
      data: {
        name: 'Temperature Sensor',
        status: 'offline',
      },
    });
    console.log('Device Created:', newDevice);
  } catch (error) {
    console.error('Error creating device:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createDevice();
