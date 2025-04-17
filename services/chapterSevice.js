import { sequelize } from '../DataBase/implement_model.js';
import Chapter from '../models/chapter.js';

export const getAllChapters = async () => {
    const chapters=await Chapter.findAll();
    return chapters
}
