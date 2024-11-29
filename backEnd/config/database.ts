import { Client } from 'pg';  
import dotenv from 'dotenv'; 

dotenv.config();  

export const connectDB = async () => {
  try {
    
    const dbURI = process.env.DATABASE_URL;

    if (!dbURI) {
      throw new Error('DATABASE_URL is not defined in environment variables.');
    }

    
    const client = new Client({
      connectionString: dbURI,  
    });

    
    await client.connect();

    console.log('Database connected...');
  } catch (err) {
    console.error('Database connection failed:');
    process.exit(1); 
  }
};
