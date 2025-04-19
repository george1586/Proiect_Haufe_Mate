import { getAllChapters, createChapter, deleteChapter, updateChapter } from "../services/chapterService.js";

export const getAllChaptersController = async (req, res) => {
    try {
        const chapters = await getAllChapters();
        res.status(200).json(chapters);
    } catch (error) {
        console.error('Error fetching chapters:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const createChapterController = async (req, res) => {
    try {
        const {title, content} = req.body;
        const newChapter = await createChapter({ title, content });
        res.status(201).json(newChapter);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteChapterController = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedChapter = await deleteChapter(id);
        if (deletedChapter) {
            res.status(200).json({ message: 'Chapter deleted successfully' });
        } else {
            res.status(404).json({ message: 'Chapter not found' });
        }
    } catch (error) {
        console.error('Error deleting chapter:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateChapterController = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const updatedChapter = await updateChapter(id, { title, content });
        if (updatedChapter) {
            res.status(200).json(updatedChapter);
        } else {
            res.status(404).json({ message: 'Chapter not found' });
        }
    } catch (error) {
        console.error('Error updating chapter:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
