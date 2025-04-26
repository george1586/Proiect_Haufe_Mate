import express from 'express';
import { getAllSubchaptersController, getSubchapterByIdController, deleteSubchapterController,updateSubchapterController, createSubchapterController } from '../controllers/subchapterController.js';
import { verifyToken, isAdmin } from '../services/authJwt.js';

const subchapterRouter=express.Router();

subchapterRouter.get("/subchapters",getAllSubchaptersController);
subchapterRouter.get("/subchapter/:id",[verifyToken,isAdmin],getSubchapterByIdController);
subchapterRouter.post("/subchapter",[verifyToken,isAdmin],createSubchapterController);
subchapterRouter.put("/subchapter/:id",[verifyToken,isAdmin],updateSubchapterController);
subchapterRouter.delete("/subchapter/:id",[verifyToken,isAdmin],deleteSubchapterController);

export default subchapterRouter;