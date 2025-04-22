import sequelize from "../config/database.js";
import { DataTypes, UUIDV4 } from "sequelize";

const userRole = sequelize.define('userRole',{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    userId:{
        type: DataTypes.UUID,
        allowNull:false
    },
    roleId:{
        type: DataTypes.UUID,
        allowNull: false
    }
},
{
    tableName: 'userRole'
})

export default userRole;