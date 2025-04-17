-- run with sqlite3 DataBase/db.sqlite < seeders/populate.sql
-- Enable foreign key support (for SQLite)
PRAGMA foreign_keys = ON;

-- Clear existing data (optional)
DELETE FROM subchapters;
DELETE FROM chapter;

-- Insert dummy chapter
INSERT INTO chapter (id, title, content, createdAt, updatedAt)
VALUES
  (
    (lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab', abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6)))),
    'Database Fundamentals',
    'Learn core database concepts and architecture',
    datetime('now'),
    datetime('now')
  ),
  (
    (lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab', abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6)))),
    'SQL Mastery',
    'From basic queries to advanced techniques',
    datetime('now'),
    datetime('now')
  );

-- Insert dummy subchapters for first chapter
INSERT INTO subchapters (id, title, content, chapterId, imageUrls, createdAt, updatedAt)
SELECT
  (lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab', abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6)))),
  'Relational Model',
  'Understanding tables, rows, and relationships',
  chapter.id,
  '["/images/relational.png"]',
  datetime('now'),
  datetime('now')
FROM chapter WHERE chapter.title = 'Database Fundamentals';

INSERT INTO subchapters (id, title, content, chapterId, imageUrls, createdAt, updatedAt)
SELECT
  (lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab', abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6)))),
  'Normalization',
  '1NF through 5NF explained',
  chapter.id,
  '["/images/normalization.png", "/images/db-design.png"]',
  datetime('now'),
  datetime('now')
FROM chapter WHERE chapter.title = 'Database Fundamentals';

-- Insert dummy subchapters for second chapter
INSERT INTO subchapters (id, title, content, chapterId, imageUrls, createdAt, updatedAt)
SELECT
  (lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab', abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6)))),
  'JOIN Operations',
  'INNER, LEFT, RIGHT and FULL JOINs',
  chapter.id,
  '["/images/joins.png"]',
  datetime('now'),
  datetime('now')
FROM chapter WHERE chapter.title = 'SQL Mastery';

INSERT INTO subchapters (id, title, content, chapterId, imageUrls, createdAt, updatedAt)
SELECT
  (lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab', abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6)))),
  'Subqueries',
  'Nested SELECT statements',
  chapter.id,
  '[]',
  datetime('now'),
  datetime('now')
FROM chapter WHERE chapter.title = 'SQL Mastery';

-- Verify the inserted data
SELECT 'chapter:' AS '';
SELECT * FROM chapter;
SELECT 'subchapters:' AS '';
SELECT * FROM subchapters;