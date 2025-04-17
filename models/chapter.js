import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

const ChapterModel = (sequelize) => {
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
            allowNull: false,
        }
    }, {
        timestamps: true,
        tableName: 'chapter',
    });

    return Chapter;
};

export default ChapterModel;
