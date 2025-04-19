import { deleteSubchapter,updateSubchapter,getAllSubchapters,getSubchapterById, createSubchapter } from "../services/subchapterService.js";

export const getAllSubchaptersController = async(req,res) =>{
    try{
        const subchapters = await getAllSubchapters();
        res.status(200).json(subchapters);
    }
    catch(error){
        console.error('Error fetching chapters:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteSubchapterController = async(req,res) => {
    try{
        const {id} = req.params;
        const deletedSubchapter = await deleteSubchapter(id);
        if(deletedSubchapter)
        {
            res.status(200).json({ message: 'Subchapter deleted successfully' });
        } else {
            res.status(404).json({ message: 'Subchapter not found' });
        }
    }
    catch(error){
        console.error('Error deleting subchapter:',error);
        res.status(500).json({message:'Internal server error'});
    }
}

export const getSubchapterByIdController = async(req,res) => {
    try{
        const {id} = req.params;
        const subchapter = await getSubchapterById(id);
        res.status(200).json(subchapter);
    }
    catch(error){
        console.error('Error:',error);
        res.status(500).json({ message: 'Internal server error'});
    }
}

export const updateSubchapterController = async(req,res) => {
    try{
        const {id} = req.params;
        const {title, content, imageUrls, chapterId} = req.body; 
        const updatedsubchapter= await updateSubchapter(id, {title,content,imageUrls,chapterId});
        if(updatedsubchapter)
        {
            res.status(200).json(updatedsubchapter);
        }else {
            res.status(400).json({ message:'Subchapter not found '});
        }
    }
    catch(error){
        console.error('Error updating subchapter',error);
        res.status(500).json({ message: 'Internal server error'});
    }
}

export const createSubchapterController = async(req,res) => {
    try{
        const {title, content, imageUrls, chapterId} = req.body;
        const createdSubchapter= await createSubchapter({title,content,imageUrls,chapterId});
        res.status(201).json(createSubchapter);
    }catch(error){
        console.error('Error:',error);
        res.status(500).json('Internal server error');
    }
}