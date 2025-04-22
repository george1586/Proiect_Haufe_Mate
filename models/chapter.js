import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; 

const Chapter = sequelize.define('Chapter', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    }, {
        timestamps: true,
        tableName: 'chapter',
    });

export default Chapter;