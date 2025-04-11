'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    const chapters = await queryInterface.sequelize.query(
      `SELECT id, title FROM chapter;`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const introChapter = chapters.find(c => c.title === 'Introduction to Databases');
    const sqlChapter = chapters.find(c => c.title === 'SQL Basics');

    if (!introChapter || !sqlChapter) {
      throw new Error("Required chapters not found. Make sure you seeded the chapters first.");
    }

    await queryInterface.bulkInsert('subchapters', [
      {
        id: uuidv4(),
        title: 'What is a Database?',
        content: 'A database is an organized collection of data, generally stored and accessed electronically.',
        chapterId: introChapter.id,
        imageUrls: JSON.stringify(['/images/db_intro.png']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        title: 'Why use Databases?',
        content: 'Databases provide efficient storage, retrieval, and manipulation of data.',
        chapterId: introChapter.id,
        imageUrls: JSON.stringify(['/images/db_use.png']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        title: 'SELECT Statement',
        content: 'The SELECT statement is used to fetch data from a database.',
        chapterId: sqlChapter.id,
        imageUrls: JSON.stringify(['/images/select_stmt.png']),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('subchapters', null, {});
  }
};
