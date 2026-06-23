const db = require('../database');

// Use with care!
db.run(`DELETE FROM reading_cards`);
db.run(`DELETE FROM readings;`);