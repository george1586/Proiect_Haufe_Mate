import {Sequelize} from 'sequelize';
import config from '../config/config.json' assert { type: 'json' };
import Chapter from '../models/chapter.js';
import Subchapter from '../models/subchapter.js';
import sequelize from '../config/database.js';


Chapter.hasMany(Subchapter, { foreignKey: 'chapterId', as: 'subchapters' });
Subchapter.belongsTo(Chapter, { foreignKey: 'chapterId', as: 'chapter' });

sequelize.sync()
  .then(() => {
    console.log('Tables Created and Updated');
  })
  .catch((error) => {
    console.error('error creating tables:', error);
  });

  export { sequelize, Chapter, Subchapter };