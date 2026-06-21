const db = require('../database')
// db.run() for state changes, returns metadata
// db.get() for retreiving exactly 1 row,
// db. all() for retreiving array of rows

const getAllReadings = (limit, offset, callback) => {
    const sql = `SELECT * FROM readings ORDER BY created_at ASC LIMIT ? OFFSET ?`;
    db.all(sql, [limit, offset], callback);
};

const createReading = (title, question, notes, callback) => {
    const sql = `INSERT INTO readings (title, question, notes) VALUES (?, ?, ?)`;
    db.run(sql, [title, question, notes], function(err) {
        if (err) {
            callback(err, null);
        } 
        else {
            callback(null, { id: this.lastID });
        }
    });
};

const getReading = (id, callback) => {
    const sql = `SELECT * FROM readings WHERE ID = ?`;
    db.get(sql, [id], callback);
};

const updateReading = (id, title, question, notes, callback) => {
    const sql = `UPDATE readings SET title = ?, question = ?, notes = ? WHERE id = ?`;
    db.run(sql, [title, question, notes, id], function (err) {
        callback(err, { changes: this.changes });
    });
};

const deleteReading = (id, callback) => {
    const sql = `DELETE FROM readings WHERE id = ?`;
    db.run(sql, [id], function (err) {
        callback(err, { changes: this.changes });
    });
};

module.exports = {
    getAllReadings,
    createReading,
    getReading,
    updateReading,
    deleteReading
}