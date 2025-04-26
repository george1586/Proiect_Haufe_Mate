import Role from "../models/role.js";
import User from "../models/user.js"

export const checkDublicateUserNameOrEmail = async(req, res, next) => {
    try{
        const user = await User.findOne({
            where: {
                name: req.body.name
            }
        });

        if (user) 
        {
            return res.status(400).json({message:"User allready exists"});
        }
        
        const email = await User.findOne({where:
            {
                email: req.body.email
            }
        })

        if(email)
            return res.status(400).json({message:"Email allready exists"})
        next();
    }
    catch(error){
        return res.status(500).json({message: error.message})
    }
}