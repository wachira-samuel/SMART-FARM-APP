import express from 'express';
import { getAllDevices } from '../controllers/deviceController.js';

const router = express.Router();

router.get('/', getAllDevices);

export default router;
