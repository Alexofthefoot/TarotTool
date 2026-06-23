const db = require('../database');

const getAllReadingCards = (callback) => {
    const sql = `SELECT * FROM reading_cards`;
    db.all(sql, [], callback);
};

const createReadingCard = (reading_id, card_id, position_number, position_name, is_reversed, notes, interpretation, reflection
    , callback) => {
    const sql = `INSERT INTO reading_cards (reading_id, card_id, position_number, position_name, is_reversed, notes, interpretation, reflection) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    db.run(sql, [reading_id, card_id, position_number, position_name, is_reversed, notes, interpretation, reflection], function (err) {
            if (err) {
                callback(err, null);
            }
            else {
                callback(null, { id: this.lastID });
            }
        });
};

const deleteReadingCard = (id, callback) => {
    const sql = `DELETE FROM reading_cards WHERE id = ?`;
    db.run(sql, [id], function (err) {
        callback(err, { changes: this.changes });
    });
}

module.exports = {
    getAllReadingCards,
    createReadingCard, 
    deleteReadingCard
};