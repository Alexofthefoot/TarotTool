import db from '../database.js';
import tarotDeck from '../../frontend/assets/tarotDeck.js';

db.serialize(() => {
    for (const card of tarotDeck) {
        const sql = `INSERT INTO cards (name, arcana, suit, rank, rank_number, deck_order, meaning_upright, meaning_reversed, image_location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        db.run(sql, [card.name, card.arcana, card.suit, card.rank, card.rank_number, card.deck_order, card.meaning_upright, card.meaning_reversed, card.image_location]
        );
    }
});