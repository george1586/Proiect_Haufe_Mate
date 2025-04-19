import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../config/database.js';

    const Subchapter = sequelize.define('subchapters', {
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
        },
        chapterId: {
            type: DataTypes.UUID,
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

export default Subchapter;