const DataTypes = require('sequelize');
const { v4: uuivd4 } = require('uuid');

module.exports = (sequelize) => {
    const Subchapter = sequelize.define('subchapters', {
        id: {
            type: DataTypes.UUID,
            defaultValue: () => uuivd4(),
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        chapterId: {
            type: DataTypes.UUIDV4,
            allowNull: false,
            references: {
                model: 'chapter',
                key: 'id',
            },
        },
        imageUrls: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue:'[]',
            get() {
                const rawValue = this.getDataValue('imageUrls');
                return rawValue ? JSON.parse(rawValue) : [];
              },
              set(value) {
                this.setDataValue('imageUrls', JSON.stringify(value || []));
              }
        },
    }, {
        timestamps: true,
        tableName: 'subchapters',
    });

    Subchapter.associate = (models) => {
        Subchapter.belongsTo(models.chapter, { 
            foreignKey: 'chapterId',
            as: 'chapter' 
        });
    };

    return Subchapter;
}