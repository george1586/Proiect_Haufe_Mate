import express from 'express';
import { getAllSubchaptersController, getSubchapterByIdController, deleteSubchapterController,updateSubchapterController, createSubchapterController } from '../controllers/subchapterController.js';

const subchapterRouter=express.Router();

subchapterRouter.get("/subchapters",getAllSubchaptersController);
subchapterRouter.get("/subchapter/:id",getSubchapterByIdController);
subchapterRouter.post("/subchapter",createSubchapterController);
subchapterRouter.put("/subchapter/:id",updateSubchapterController);
subchapterRouter.delete("/subchapter/:id",deleteSubchapterController);

export default subchapterRouter;