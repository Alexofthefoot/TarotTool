import db from '../database.js';
// db.run() for state changes, returns metadata
// db.get() for retreiving exactly 1 row,
// db. all() for retreiving array of rows

const getAllReadings = (limit, offset, callback) => {
    const sql = `SELECT * FROM readings ORDER BY created_at DESC LIMIT ? OFFSET ?`;
    db.all(sql, [limit, offset], callback);
};

const createReading = (title, question, interpretation, callback) => {
    const sql = `INSERT INTO readings (title, question, interpretation) VALUES (?, ?, ?)`;
    db.run(sql, [title, question, interpretation], function(err) {
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

const updateReading = (id, title, question, interpretation, callback) => {
    const sql = `UPDATE readings SET title = ?, question = ?, interpretation = ? WHERE id = ?`;
    db.run(sql, [title, question, interpretation, id], function (err) {
        callback(err, { changes: this.changes });
    });
};

const deleteReading = (id, callback) => {
    const sql = `DELETE FROM readings WHERE id = ?`;
    db.run(sql, [id], function (err) {
        callback(err, { changes: this.changes });
    });
};

const getCardsPerReading = (id, callback) => {
    const sql = `SELECT cards.deck_order,
    cards.name, 
    cards.image_location, 
    reading_cards.position_number, 
    strftime('%b %d, %Y', readings.created_at) AS created_at
    FROM reading_cards 
    INNER JOIN readings ON reading_cards.reading_id = readings.id
    INNER JOIN cards ON reading_cards.card_id = cards.id
    WHERE reading_cards.reading_id = ?`;
    db.all(sql, [id], callback);
}

const readingServices =  {
    getAllReadings,
    createReading,
    getReading,
    updateReading,
    deleteReading, 
    getCardsPerReading
};

export default readingServices