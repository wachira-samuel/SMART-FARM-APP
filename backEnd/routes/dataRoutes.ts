import express from "express";
import { getSensorData } from "../controllers/dataController.js";

const router = express.Router();

router.get("/", getSensorData);

export default router;
