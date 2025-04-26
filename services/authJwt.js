import jwt from 'jsonwebtoken';
import {config} from 'dotenv';
import User from '../models/user.js'

config();

export const verifyToken = (req, res, next) => {
    const token = req.session.token;
    if (!token) {
        return res.status(403).json({ message: 'No token provided!' });
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized!' });
        }
        req.id = decoded.id;
        next();
    });
}

export const isAdmin = async (req, res, next) => {
    try{
        const user = await User.findByPk(req.id);
        const roles = await user.getRoles();

        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "admin") {
              return next();
            }
          }
        return res.status(403).json({message:"Admin Role is needed"});
    }
    catch(error){
        console.error('error:',error);
        res.status(500).json({message:'Internal server error'});
    }
}