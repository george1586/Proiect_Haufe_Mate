import express from 'express';
import { getAllChaptersController } from '/home/potens/Proiect_Haufe_Mate/controllers/chapterController.js';

const chapterRouter = express.Router();

chapterRouter.get('/chapters', getAllChaptersController);

export default chapterRouter