import { getAllUsersController, getUserByIdController, deleteUserController, updateUserController, createUserController } from "../controllers/userController.js";
import express from 'express';

const userRouter=express.Router();

userRouter.get('/users',getAllUsersController);
userRouter.get('/users/:id',getUserByIdController);
userRouter.post('/users',createUserController);
userRouter.put('/users/:id',updateUserController);
userRouter.delete('/users/:id',deleteUserController);

export default userRouter;