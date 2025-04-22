import User from '../models/user.js'
import Role from '../models/role.js';

export const getAllUsers = async() =>{
    const users = User.findAll();
    return users;
}

export const createUser = async(userData) =>{
    try{
        const newUser = await User.create({
            name : userData.name,
            email : userData.email,
            passwordHash : userData.passwordHash,
        })

        const userRole = await Role.findOne({where:{name:'user'}});
        await newUser.addRole(userRole);
        
        return newUser;
    }
    catch(error){
        console.error('Error:',error);
        throw error;
    }
}

export const deleteUser = async(id) => {
    try{
        const deletedUser = await User.destroy( {where:{id}} );
        return deletedUser;
    }
    catch(error){
        console.error("Eraore:",error);
        throw error;
    }
}

export const getUserById = async(id) => {
    try{
        const user = await User.findByPk(id);
        if(!user)
            console.log("No user found");
        return user;
    }
    catch(error){
        console.error("Eroare:",error);
        throw error;
    }
}

export const updateUser = async(id, userData) =>{
    try{
        const updatedUser = await User.update(userData, {where:{id}});
        return updatedUser;
    }
    catch(error){
        console.error('Eroare',error);
        throw error;
    }
}