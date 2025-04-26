import { getAllUsersController, getUserByIdController, deleteUserController, updateUserController, createUserController, updateRoleController } from "../controllers/userController.js";
import express from 'express';
import { verifyToken, isAdmin } from '../services/authJwt.js';

const userRouter=express.Router();

userRouter.get('/users',[verifyToken, isAdmin],getAllUsersController);
userRouter.get('/users/:id',[verifyToken, isAdmin],getUserByIdController);
userRouter.post('/roles/:id',[verifyToken, isAdmin],updateRoleController);
userRouter.post('/users',[verifyToken, isAdmin],createUserController);
userRouter.put('/users/:id',[verifyToken, isAdmin],updateUserController);
userRouter.delete('/users/:id',[verifyToken, isAdmin],deleteUserController);

export default userRouter;