import { sequelize } from '../DataBase/implement_model.js';
import Chapter from '../models/chapter.js';

export const getAllChapters = async () => {
    const chapters=await Chapter.findAll();
    return chapters
}

export const createChapter = async (chapterData) => {
    try {
        const newChapter = await Chapter.create({
            title: chapterData.title,
            content: chapterData.content,
        });
        return newChapter;
    } catch (error) {
        console.error('Error creating chapter:', error);
        throw error;
    }
}

export const deleteChapter = async (id) => {
    try {
        const deletedChapter = await Chapter.destroy({where: {id} });
        return deletedChapter;
    } catch (error) {
        console.error('Error deleting chapter:', error);
        throw error;
    }
}

export const updateChapter = async (id, chapterData) => {
    try {
        const updatedChapter = await Chapter.update(chapterData, { where: { id } });
        return updatedChapter;
    } catch (error) {
        console.error('Error updating chapter:', error);
        throw error;
    }
}