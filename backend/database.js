const sqlite3 = require('sqlite3').verbose()
const dbname = 'myDatabase.db'

let db = new sqlite3.Database(dbname, (err) => {
    if (err) {
        console.error(err.message)
    }
    else {
        console.log('Connected to the database.')

        db.run('CREATE TABLE IF NOT EXISTS card (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT)', (err) => {
            if (err) {
                console.error(err.message)
            }
            else {
                console.log("Table 'card' is ready.")
            }
        })
    }
});

module.exports = db;