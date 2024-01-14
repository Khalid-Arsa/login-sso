import express from "express";
import { AuthController } from "../controller/auth.controller";

const router = express.Router();
const authController = new AuthController();

// Signup
router.post(
  "/signin",
  authController.signin,
);

export default router;
