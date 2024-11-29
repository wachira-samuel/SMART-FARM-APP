import express, { Router } from "express"; // Import Express and Router types
import { registerUser, loginUser } from "../controllers/userController"; // Import registerUser and loginUser functions

const router: Router = express.Router(); // Create a router instance with explicit type

// Route to handle user registration
router.post("/register", registerUser);

// Route to handle user login
router.post("/login", loginUser);

export default router; // Export the router
