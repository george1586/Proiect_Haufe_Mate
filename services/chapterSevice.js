import { sequelize } from '../DataBase/implement_model.js';
import ChapterModel from '../models/chapter.js';

const Chapter= ChapterModel(sequelize);
export const getAllChapters = async () => {
    const chapters=await Chapter.findAll();
    return chapters
}
