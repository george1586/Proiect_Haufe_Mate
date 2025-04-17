import { getAllChapters } from "/home/potens/Proiect_Haufe_Mate/services/chapterSevice.js";

export const getAllChaptersController = async (req, res) => {
    try {
        const chapters = await getAllChapters();
        res.status(200).json(chapters);
    } catch (error) {
        console.error('Error fetching chapters:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

