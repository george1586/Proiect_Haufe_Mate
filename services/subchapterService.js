import Subchapter from "../models/subchapter.js";

export const getAllSubchapters = async () => {
    const subchapters = await Subchapter.findAll();
    return subchapters;
}

export const createSubchapter = async (subchapterData) => {
    try {
        const newSubchapter = await Subchapter.create({
            title: subchapterData.title,
            content: subchapterData.content,
            chapterId: subchapterData.chapterId,
            imageUrls: subchapterData.imageUrls
        });
        return newSubchapter;
    } catch (error) {
        console.error('Error creating subchapter:', error);
        throw error;
    }
}

export const deleteSubchapter = async (id) => {
    try{
        const deletedSubchapter = await Subchapter.destroy({ where: {id} });
        return deletedSubchapter;
    }
    catch(error){
        console.error('Error deleting subchapter:', error);
        throw error;
    }
}

export const updateSubchapter = async (id, subchapterData) => {
    try{
        const updatedSubchapter= await Subchapter.update(subchapterData, {where: {id}} );
        return updatedSubchapter;
    }
    catch(error){
        console.error('Error updating subchapter:', error);
        throw error;
    }
}

export const getSubchapterById = async (id) => {
    try {
        const subchapter= await Subchapter.findByPk(id);
        if(!subchapter)
        {
            console.log("No subchapter found");
        }
        return subchapter;
    }
    catch(error){
        console.error("Internal server error",error);
        throw error;
    }
}