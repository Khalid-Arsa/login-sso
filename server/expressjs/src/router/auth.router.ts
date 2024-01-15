import express from "express";
import passport from "passport";
import { AuthController } from "../controller/auth.controller";

const router = express.Router();
const authController = new AuthController();

// Facebook
router.get('/login/federated/facebook', passport.authenticate('facebook'));

export default router;
