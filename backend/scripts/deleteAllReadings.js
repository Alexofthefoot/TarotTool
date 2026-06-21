const db = require('../database');

// Use with care!
db.run(`DELETE FROM readings;`);