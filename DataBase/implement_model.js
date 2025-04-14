const { Sequelize } = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(config['development']);

const Chapter = require('../models/chapter')(sequelize);
const Subchapter = require('../models/subchapter')(sequelize);

Chapter.hasMany(Subchapter, { foreignKey: 'chapterId', as: 'subchapters' });
Subchapter.belongsTo(Chapter, { foreignKey: 'chapterId', as: 'chapter' });

sequelize.sync({ force: true })
  .then(() => {
    console.log('Tables Created and Updated');
  })
  .catch((error) => {
    console.error('error creating tables:', error);
  });
