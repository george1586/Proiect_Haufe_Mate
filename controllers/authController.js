import {Role, User} from "../DataBase/implement_model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser } from "../services/userService.js";
import { config } from "dotenv";

config();
const secret_key = process.env.TOKEN_SECRET;

export const signUp = async(req,res) => {
    try{
        const saltROunds = 10;
        const hashedPassword = bcrypt.hashSync(req.body.passwordHash, saltROunds);
        req.body.passwordHash = hashedPassword;
        const user = await createUser(req.body);
        res.status(201).json({message:'User registred succesfully'});
    }
    catch(error){
        console.error('Error:',error);
        res.status(500).json({message:'Internal server error'});
    }
}

export const signIn = async(req,res) => {
    try{
        const user = await User.findOne({where:{
            name: req.body.name,
        }});

        if(!user)
            return res.status(404).json({message:'User not found'});

        const passwordIsValid = bcrypt.compareSync( req.body.passwordHash, user.passwordHash );

        if(!passwordIsValid)
            return res.status(401).json({message:'Password is not valid'});

        const roles = await user.getRoles();
        let authorities = roles.map(role => role.name);

        const token = jwt.sign({id:user.id},
            secret_key,
            {
                algorithm: 'HS256',
                allowInsecureKeySizes: true,
                expiresIn: 86400,
            });
        req.session.token = token;

        return res.status(200).json({
            name: user.name,
            email: user.email,
            roles: authorities,
            token: token
        })
    }
    catch(error){
        console.error('Error',error);
        res.status(500).json({message:'Internal server error'});
    }
}

export const signOut = async(req,res) => {
    try{
        req.session = null;
        return res.status(200).json({message:'User signed out successfully'});
    }
    catch(error){
        console.error('Error:',error);
        return res.status(500).json({message:'Internal server error'});
    }
}