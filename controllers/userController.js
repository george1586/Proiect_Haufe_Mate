import { getAllUsers, getUserById, createUser, updateUser, deleteUser, updateRole } from "../services/userService.js";

export const getAllUsersController = async(req,res) => {
    try{
        const users = await getAllUsers();
        res.status(200).json(users);
    }
    catch(error){
        console.error("Error",error);
        res.status(501).json({message: 'Internal server error'});
    }
}

export const updateRoleController = async(req,res) => {
    try{
        const {id} =req.params;
        const order = req.body.order;
        const user = await updateRole(id, order);
        res.status(200).json(user);
    }
    catch(error){
        console.error('Error',error);
        res.status(501).json({message: 'Internal server error'});
    }
}

export const getUserByIdController = async(req,res) => {
    try{
        const {id} = req.params;
        const user = await getUserById(id);
        res.status(200).json(user);
    }
    catch(error){
        console.error("Error",error);
        res.status(501).json({message: 'Internal server error'});
    }
}

export const createUserController = async(req,res) => {
    try{
        const {passwordHash, name, email} = req.body;
        const user = await createUser({passwordHash, name, email});
        res.status(200).json(user);
    }
    catch(error){
        console.error("Error",error);
        res.status(501).json({message: 'Internal server error'});
    }
}

export const deleteUserController = async(req,res) => {
    try{
        const {id} = req.params;
        const user = await deleteUser(id);
        if (user) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }
    catch(error){
        console.error("Error",error);
        res.status(501).json({message: 'Internal server error'});
    }
}

export const updateUserController = async(req,res) => {
    try{
        const {id} = req.params;
        const {name,email,passwordHash} = req.body;
        const user = await updateUser(id, {name,email,passwordHash})
        if(user)
            {
                res.status(200).json(user);
            }else {
                res.status(400).json({ message:'User not found '});
            }
    }
    catch(error){
        console.error("Error",error);
        res.status(501).json({message: 'Internal server error'});
    }
}