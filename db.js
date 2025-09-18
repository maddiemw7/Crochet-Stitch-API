const Database = require('better-sqlite3');
const db = new Database('stitches.db'); // new file stitches.db

//create table if it doesn't exist
db.prepare(`
  CREATE TABLE IF NOT EXISTS stitches (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    abbreviation TEXT NOT NULL,
    difficulty TEXT NOT NULL,
    description TEXT,
    steps TEXT
  )
`).run();
module.exports = db;