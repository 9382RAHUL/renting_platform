import express from "express";
import { forgotPassword, getUser, login, resetPassword, signup } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login",login);
router.get("/getuser",getUser)
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;