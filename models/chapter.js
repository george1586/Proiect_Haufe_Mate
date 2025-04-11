const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
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

    Chapter.associate = (models) => {
        Chapter.hasMany(models.Subchapter, { 
            foreignKey: 'chapterId',
            as: 'subchapters' 
        });
    };

    return Chapter;
};
