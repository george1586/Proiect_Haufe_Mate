'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('chapter', [
      {
        id: uuidv4(),
        title: 'Introduction to Databases',
        content: 'Learn the fundamentals of database systems, including relational models and schemas.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        title: 'SQL Basics',
        content: 'Understanding SQL queries such as SELECT, INSERT, UPDATE, and DELETE.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        title: 'Advanced Database Concepts',
        content: 'Explore indexes, transactions, views, and stored procedures.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('chapter', null, {});
  }
};
