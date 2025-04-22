import sequelize from '../config/database.js';
import { DataTypes } from 'sequelize';

const Role = sequelize.define('role', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING
    }
},
{
    tableName: 'role',
    timestamps: false
})

export default Role;