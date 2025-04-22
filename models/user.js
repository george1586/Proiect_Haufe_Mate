import sequelize from "../config/database.js"
import { DataTypes } from "sequelize"

const User= sequelize.define('User',{
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        passwordHash:{
            type:DataTypes.TEXT,
            allowNull:false,
        }
},
{
    timestamps:true,
    tableName:'users',
})

export default User;

