import express from "express";
import dotenv from "./config/dotenv.js";
import { connectDB } from "./config/database.js";
import deviceRoutes from "./routes/deviceRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import dataRoutes from "./routes/dataRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use("/devices", deviceRoutes);
app.use("/users", userRoutes); // LOGIN http:localhost: /users/login REGISTER /users/register
app.use("/data", dataRoutes);
app.use(errorHandler);

export default app;
