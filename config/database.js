import { Sequelize } from 'sequelize';
import config from './config.json' assert { type: 'json' };

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize({
  dialect: dbConfig.dialect,
  storage: dbConfig.storage,
//   username: dbConfig.username,
//   password: dbConfig.password,
//   database: dbConfig.database,
  logging: dbConfig.logging || false
});

export default sequelize;