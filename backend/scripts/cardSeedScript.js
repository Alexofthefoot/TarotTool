const db = require('../database');
const path = '../assets/Card';

const majorArcana = [
    { name: 'The Fool', arcana: 'Major', deck_order: 0, image_location: '00-TheFool.png' },
    { name: 'The Magician', arcana: 'Major', deck_order: 1, image_location: '01-TheMagician.png' },
    { name: 'The High Priestess', arcana: 'Major', deck_order: 2, image_location: '02-TheHighPriestess.png' },
    { name: 'The Empress', arcana: 'Major', deck_order: 3, image_location: '03-TheEmpress.png' },
    { name: 'The Emperor', arcana: 'Major', deck_order: 4, image_location: '04-TheEmperor.png' },
    { name: 'The Hierophant', arcana: 'Major', deck_order: 5, image_location: '05-TheHierophant.png' },
    { name: 'The Lovers', arcana: 'Major', deck_order: 6, image_location: '06-TheLovers.png' },
    { name: 'The Chariot', arcana: 'Major', deck_order: 7, image_location: '07-TheChariot.png' },
    { name: 'Strength', arcana: 'Major', deck_order: 8, image_location: '08-Strength.png' },
    { name: 'The Hermit', arcana: 'Major', deck_order: 9, image_location: '09-TheHermit.png' },
    { name: 'Wheel of Fortune', arcana: 'Major', deck_order: 10, image_location: '10-WheelOfFortune.png' },
    { name: 'Justice', arcana: 'Major', deck_order: 11, image_location: '11-Justice.png' },
    { name: 'The Hanged Man', arcana: 'Major', deck_order: 12, image_location: '12-TheHangedMan.png' },
    { name: 'Death', arcana: 'Major', deck_order: 13, image_location: '13-Death.png' },
    { name: 'Temperance', arcana: 'Major', deck_order: 14, image_location: '14-Temperance.png' },
    { name: 'The Devil', arcana: 'Major', deck_order: 15, image_location: '15-TheDevil.png' },
    { name: 'The Tower', arcana: 'Major', deck_order: 16, image_location: '16-TheTower.png' },
    { name: 'The Star', arcana: 'Major', deck_order: 17, image_location: '17-TheStar.png' },
    { name: 'The Moon', arcana: 'Major', deck_order: 18, image_location: '18-TheMoon.png' },
    { name: 'The Sun', arcana: 'Major', deck_order: 19, image_location: '19-TheSun.png' },
    { name: 'Judgement', arcana: 'Major', deck_order: 20, image_location: '20-Judgement.png' },
    { name: 'The World', arcana: 'Major', deck_order: 21, image_location: '21-TheWorld.png' }
];

// const cards = [
//     { name: '', arcana: '', suit: '', rank: '', rank_number: , deck_order: , image_location: path + '' }
// ]

majorArcana.forEach(card => {
    db.run(
        `INSERT INTO cards (name, arcana, suit, rank, rank_number, deck_order, meaning_upright, meaning_reversed, image_location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [card.name, card.arcana, card.suit, card.rank, card.rank_number, card.deck_order, card.meaning_upright, card.meaning_reversed, card.image_location]
    );
});