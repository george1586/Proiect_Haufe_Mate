import {ChapterModel} from '../models/chapter.js';

export const getAllChapters = async () => {
    const chapters= await ChapterModel.findAll();
    return chapters
}
