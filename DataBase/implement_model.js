import {Sequelize} from 'sequelize';
import config from '../config/config.json' assert { type: 'json' };
import ChapterModel from '../models/chapter.js';
import SubchapterModel from '../models/subchapter.js';

const sequelize = new Sequelize(config['development']);
const Chapter = ChapterModel(sequelize);
const Subchapter = SubchapterModel(sequelize);

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