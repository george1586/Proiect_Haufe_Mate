import express from 'express';
import { getAllChaptersController, createChapterController, deleteChapterController, updateChapterController} from '/home/potens/Proiect_Haufe_Mate/controllers/chapterController.js';
import { verifyToken, isAdmin } from '../services/authJwt.js';

const chapterRouter = express.Router();

chapterRouter.get('/chapters', getAllChaptersController);
chapterRouter.post('/chapters',[verifyToken, isAdmin], createChapterController);
chapterRouter.delete('/chapters/:id', [verifyToken, isAdmin], deleteChapterController);
chapterRouter.put('/chapters/:id', [verifyToken,isAdmin], updateChapterController);

export default chapterRouter