import { signUp, signIn } from "../controllers/authController.js";
import express from 'express';
import { checkDublicateUserNameOrEmail } from "../services/verifySignUp.js";

const authRouter= express.Router();

authRouter.post("/signUp",[checkDublicateUserNameOrEmail],signUp);
authRouter.post("/signIn",signIn);

export default authRouter;