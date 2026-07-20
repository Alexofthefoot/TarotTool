import db from '../database.js';

const getAllReadingCards = (callback) => {
    const sql = `SELECT * FROM reading_cards`;
    db.all(sql, [], callback);
};

const createReadingCard = (readingCardArray, callback) => {
    const sql = `INSERT INTO reading_cards (reading_id, card_id, position_number, position_name, is_reversed, notes, interpretation, reflection) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    let completed = [];
    db.serialize(() => {
        for (const readingCard of readingCardArray) {
            db.run(sql, [readingCard.reading_id, readingCard.card_id, readingCard.position_number, readingCard.position_name, readingCard.is_reversed,
            readingCard.notes, readingCard.interpretation, readingCard.reflection], function (err) {
                if (err) {
                    console.log(err);
                    callback(err, null);
                }
                completed.push(this.lastID);
                if (completed.length === readingCardArray.length) {
                    callback(null, { Inserted: completed });
                }
            });
        }
    });
};

const deleteReadingCard = (id, callback) => {
    const sql = `DELETE FROM reading_cards WHERE id = ?`;
    db.run(sql, [id], function (err) {
        callback(err, { changes: this.changes });
    });
}

const reading_cardServices = {
    getAllReadingCards,
    createReadingCard,
    deleteReadingCard
};

export default reading_cardServices