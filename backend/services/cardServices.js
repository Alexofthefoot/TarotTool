// service workers are underlings, 
// they dont need to know anything about HTTP requests, status codes, req or res.
// Their only job is to search the filing cabinet (db) for the specific thing they are asked about

// SQL queries
// db.get, db.all, db.run
// callbacks or raw DB results
// no req, no res

const db = require('../database')

const getAllCards = (callback) => {
    const sql = `SELECT * FROM cards`;
    db.all(sql, [], callback);
}

const createCard = (name, deck_order, callback) => {
    const sql = `INSERT INTO cards (name, deck_order) VALUES (?, ?)`;
    db.run(sql, [name, deck_order], function (err) {
        callback(err, { id: this.lastID })
    })
};

module.exports = {
    getAllCards, 
    createCard
}