import db from '../database.js';

// Use with care!
db.run(`DELETE FROM reading_cards`);
db.run(`DELETE FROM readings;`);