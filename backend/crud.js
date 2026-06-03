const db = require('./database')

const createCard = (name, description, callback) => {
    const sql = `INSERT INTO card (name, description) VALUES (?, ?)`
    db.run(sql, [name, description], function (err) {
        callback(err, { id: this.lastID })
    })
}

const readCard = (id, callback) => {
    const sql = `SELECT * FROM card WHERE id = ?`
    db.get(sql, [id], callback)
}

const readAllCards = (callback) => {
    const sql = `SELECT * FROM card`
    db.all(sql, [], callback)
}

const updateCard = (id, name, description, callback) => {
    const sql = `UPDATE card SET name = ?, description = ? WHERE id = ?`
    db.run(sql, [name, description, id], callback )
}

const deleteCard = (id, callback) => {
    const sql = `DELETE FROM card WHERE id = ?`
    db.run(sql, [id], callback)
}

module.exports = { 
    createCard,
    readCard,
    readAllCards,
    updateCard,
    deleteCard
}   