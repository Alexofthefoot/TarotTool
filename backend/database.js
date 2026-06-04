const sqlite3 = require('sqlite3').verbose()
const dbname = 'tarotData.db'

let db = new sqlite3.Database(dbname, (err) => {
    if (err) {
        console.error(err.message)
    }
    else {
        console.log('Connected to the database.')
    }
    db.serialize(() => {
        db.run(`PRAGMA foreign_keys = ON;`)

        db.run(`CREATE TABLE IF NOT EXISTS cards (id INTEGER PRIMARY KEY AUTOINCREMENT, 
                name TEXT NOT NULL UNIQUE, 
                arcana TEXT NOT NULL CHECK (arcana IN ('Major', 'Minor')),
                suit TEXT,
                rank TEXT,
                rank_number INTEGER,
                deck_order INTEGER UNIQUE,
                meaning_upright TEXT,
                meaning_reversed TEXT,
                image_location TEXT)`, (err) => {
            if (err) {
                console.error(err.message)
            }
            else {
                console.log("Table 'cards' is ready.")
            }
        })
        db.run(`CREATE TABLE IF NOT EXISTS readings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT,
                question TEXT,
                notes TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`, (err) => {
            if (err) {
                console.error(err.message)
            }
            else {
                console.log("Table 'readings' is ready.")
            }
        })
        db.run(`CREATE TABLE IF NOT EXISTS reading_cards (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                reading_id INTEGER NOT NULL,
                card_id INTEGER NOT NULL,
                position_number INTEGER,
                position_name TEXT,
                is_reversed BOOLEAN DEFAULT FALSE,
                notes TEXT,
                interpretation TEXT,
                reflection TEXT,
                FOREIGN KEY (reading_id) REFERENCES readings(id),
                FOREIGN KEY (card_id) REFERENCES cards(id))`, (err) => {
            if (err) {
                console.error(err.message)
            }
            else {
                console.log("Table 'reading_cards' is ready.")
            }
        })
    })
});

module.exports = db;