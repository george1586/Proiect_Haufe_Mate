import {Sequelize} from 'sequelize';
import config from '../config/config.json' assert { type: 'json' };
import Chapter from '../models/chapter.js';
import Subchapter from '../models/subchapter.js';
import sequelize from '../config/database.js';
import Role from '../models/role.js';
import User from '../models/user.js';
import userRole from '../models/userRole.js';

Chapter.hasMany(Subchapter, { foreignKey: 'chapterId', as: 'subchapters' });
Subchapter.belongsTo(Chapter, { foreignKey: 'chapterId', as: 'chapter' });
User.belongsToMany(Role, { through: userRole, foreignKey: 'userId'});
Role.belongsToMany(User, { through: userRole, foreignKey:'roleId'});


sequelize.sync({alter:true})
  .then(() => {
  })
  .catch((error) => {
    console.error('error creating tables:', error);
  });

  export { sequelize, Chapter, Subchapter,User, Role, userRole };