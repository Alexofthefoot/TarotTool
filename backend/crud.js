const db = require('./database')

//ROUTES FOR CARDS
const createCard = (name, deck_order, callback) => {
    console.log('name:', name);
    console.log('deck_order:', deck_order);
    const sql = `INSERT INTO cards (name, deck_order) VALUES (?, ?)`
    db.run(sql, [name, deck_order], function (err) {
        callback(err, { id: this.lastID })
    })
}

const readCard = (id, callback) => {
    const sql = `SELECT * FROM cards WHERE id = ?`
    db.get(sql, [id], callback)
}

const readAllCards = (callback) => {
    const sql = `SELECT * FROM cards`
    db.all(sql, [], callback)
}

const updateCard = (id, name, deck_order, callback) => {
    const sql = `UPDATE cards SET name = ?, deck_order = ? WHERE id = ?`
    db.run(sql, [name, deck_order, id], callback )
}

const deleteCard = (id, callback) => {
    const sql = `DELETE FROM cards WHERE id = ?`
    db.run(sql, [id], callback)
}

//ROUTES FOR READINGS



//ROUTES FOR READING_CARDS

module.exports = { 
    createCard,
    readCard,
    readAllCards,
    updateCard,
    deleteCard
}   