import express from 'express';
import { getAllChaptersController, createChapterController, deleteChapterController, updateChapterController} from '/home/potens/Proiect_Haufe_Mate/controllers/chapterController.js';

const chapterRouter = express.Router();

chapterRouter.get('/chapters', getAllChaptersController);
chapterRouter.post('/chapters', createChapterController);
chapterRouter.delete('/chapters/:id', deleteChapterController);
chapterRouter.put('/chapters/:id', updateChapterController);

export default chapterRouter