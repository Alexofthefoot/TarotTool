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

const minorArcana = [
    // Wands
    { name: 'Ace of Wands', arcana: 'Minor', suit: 'Wands', rank: 'Ace', rank_number: 1, deck_order: 22, image_location: 'Wands01.png' },
    { name: 'Two of Wands', arcana: 'Minor', suit: 'Wands', rank: 'Two', rank_number: 2, deck_order: 23, image_location: 'Wands02.png' },
    { name: 'Three of Wands', arcana: 'Minor', suit: 'Wands', rank: 'Three', rank_number: 3, deck_order: 24, image_location: 'Wands03.png' },
    { name: 'Four of Wands', arcana: 'Minor', suit: 'Wands', rank: 'Four', rank_number: 4, deck_order: 25, image_location: 'Wands04.png' },
    { name: 'Five of Wands', arcana: 'Minor', suit: 'Wands', rank: 'Five', rank_number: 5, deck_order: 26, image_location: 'Wands05.png' },
    { name: 'Six of Wands', arcana: 'Minor', suit: 'Wands', rank: 'Six', rank_number: 6, deck_order: 27, image_location: 'Wands06.png' },
    { name: 'Seven of Wands', arcana: 'Minor', suit: 'Wands', rank: 'Seven', rank_number: 7, deck_order: 28, image_location: 'Wands07.png' },
    { name: 'Eight of Wands', arcana: 'Minor', suit: 'Wands', rank: 'Eight', rank_number: 8, deck_order: 29, image_location: 'Wands08.png' },
    { name: 'Nine of Wands', arcana: 'Minor', suit: 'Wands', rank: 'Nine', rank_number: 9, deck_order: 30, image_location: 'Wands09.png' },
    { name: 'Ten of Wands', arcana: 'Minor', suit: 'Wands', rank: 'Ten', rank_number: 10, deck_order: 31, image_location: 'Wands10.png' },
    { name: 'Page of Wands', arcana: 'Minor', suit: 'Wands', rank: 'Page', rank_number: 11, deck_order: 32, image_location: 'Wands11.png' },
    { name: 'Knight of Wands', arcana: 'Minor', suit: 'Wands', rank: 'Knight', rank_number: 12, deck_order: 33, image_location: 'Wands12.png' },
    { name: 'Queen of Wands', arcana: 'Minor', suit: 'Wands', rank: 'Queen', rank_number: 13, deck_order: 34, image_location: 'Wands13.png' },
    { name: 'King of Wands', arcana: 'Minor', suit: 'Wands', rank: 'King', rank_number: 14, deck_order: 35, image_location: 'Wands14.png' },

    // Cups
    { name: 'Ace of Cups', arcana: 'Minor', suit: 'Cups', rank: 'Ace', rank_number: 1, deck_order: 36, image_location: 'Cups01.png' },
    { name: 'Two of Cups', arcana: 'Minor', suit: 'Cups', rank: 'Two', rank_number: 2, deck_order: 37, image_location: 'Cups02.png' },
    { name: 'Three of Cups', arcana: 'Minor', suit: 'Cups', rank: 'Three', rank_number: 3, deck_order: 38, image_location: 'Cups03.png' },
    { name: 'Four of Cups', arcana: 'Minor', suit: 'Cups', rank: 'Four', rank_number: 4, deck_order: 39, image_location: 'Cups04.png' },
    { name: 'Five of Cups', arcana: 'Minor', suit: 'Cups', rank: 'Five', rank_number: 5, deck_order: 40, image_location: 'Cups05.png' },
    { name: 'Six of Cups', arcana: 'Minor', suit: 'Cups', rank: 'Six', rank_number: 6, deck_order: 41, image_location: 'Cups06.png' },
    { name: 'Seven of Cups', arcana: 'Minor', suit: 'Cups', rank: 'Seven', rank_number: 7, deck_order: 42, image_location: 'Cups07.png' },
    { name: 'Eight of Cups', arcana: 'Minor', suit: 'Cups', rank: 'Eight', rank_number: 8, deck_order: 43, image_location: 'Cups08.png' },
    { name: 'Nine of Cups', arcana: 'Minor', suit: 'Cups', rank: 'Nine', rank_number: 9, deck_order: 44, image_location: 'Cups09.png' },
    { name: 'Ten of Cups', arcana: 'Minor', suit: 'Cups', rank: 'Ten', rank_number: 10, deck_order: 45, image_location: 'Cups10.png' },
    { name: 'Page of Cups', arcana: 'Minor', suit: 'Cups', rank: 'Page', rank_number: 11, deck_order: 46, image_location: 'Cups11.png' },
    { name: 'Knight of Cups', arcana: 'Minor', suit: 'Cups', rank: 'Knight', rank_number: 12, deck_order: 47, image_location: 'Cups12.png' },
    { name: 'Queen of Cups', arcana: 'Minor', suit: 'Cups', rank: 'Queen', rank_number: 13, deck_order: 48, image_location: 'Cups13.png' },
    { name: 'King of Cups', arcana: 'Minor', suit: 'Cups', rank: 'King', rank_number: 14, deck_order: 49, image_location: 'Cups14.png' },

    // Swords
    { name: 'Ace of Swords', arcana: 'Minor', suit: 'Swords', rank: 'Ace', rank_number: 1, deck_order: 50, image_location: 'Swords01.png' },
    { name: 'Two of Swords', arcana: 'Minor', suit: 'Swords', rank: 'Two', rank_number: 2, deck_order: 51, image_location: 'Swords02.png' },
    { name: 'Three of Swords', arcana: 'Minor', suit: 'Swords', rank: 'Three', rank_number: 3, deck_order: 52, image_location: 'Swords03.png' },
    { name: 'Four of Swords', arcana: 'Minor', suit: 'Swords', rank: 'Four', rank_number: 4, deck_order: 53, image_location: 'Swords04.png' },
    { name: 'Five of Swords', arcana: 'Minor', suit: 'Swords', rank: 'Five', rank_number: 5, deck_order: 54, image_location: 'Swords05.png' },
    { name: 'Six of Swords', arcana: 'Minor', suit: 'Swords', rank: 'Six', rank_number: 6, deck_order: 55, image_location: 'Swords06.png' },
    { name: 'Seven of Swords', arcana: 'Minor', suit: 'Swords', rank: 'Seven', rank_number: 7, deck_order: 56, image_location: 'Swords07.png' },
    { name: 'Eight of Swords', arcana: 'Minor', suit: 'Swords', rank: 'Eight', rank_number: 8, deck_order: 57, image_location: 'Swords08.png' },
    { name: 'Nine of Swords', arcana: 'Minor', suit: 'Swords', rank: 'Nine', rank_number: 9, deck_order: 58, image_location: 'Swords09.png' },
    { name: 'Ten of Swords', arcana: 'Minor', suit: 'Swords', rank: 'Ten', rank_number: 10, deck_order: 59, image_location: 'Swords10.png' },
    { name: 'Page of Swords', arcana: 'Minor', suit: 'Swords', rank: 'Page', rank_number: 11, deck_order: 60, image_location: 'Swords11.png' },
    { name: 'Knight of Swords', arcana: 'Minor', suit: 'Swords', rank: 'Knight', rank_number: 12, deck_order: 61, image_location: 'Swords12.png' },
    { name: 'Queen of Swords', arcana: 'Minor', suit: 'Swords', rank: 'Queen', rank_number: 13, deck_order: 62, image_location: 'Swords13.png' },
    { name: 'King of Swords', arcana: 'Minor', suit: 'Swords', rank: 'King', rank_number: 14, deck_order: 63, image_location: 'Swords14.png' },

    // Pentacles
    { name: 'Ace of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: 'Ace', rank_number: 1, deck_order: 64, image_location: 'Pentacles01.png' },
    { name: 'Two of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: 'Two', rank_number: 2, deck_order: 65, image_location: 'Pentacles02.png' },
    { name: 'Three of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: 'Three', rank_number: 3, deck_order: 66, image_location: 'Pentacles03.png' },
    { name: 'Four of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: 'Four', rank_number: 4, deck_order: 67, image_location: 'Pentacles04.png' },
    { name: 'Five of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: 'Five', rank_number: 5, deck_order: 68, image_location: 'Pentacles05.png' },
    { name: 'Six of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: 'Six', rank_number: 6, deck_order: 69, image_location: 'Pentacles06.png' },
    { name: 'Seven of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: 'Seven', rank_number: 7, deck_order: 70, image_location: 'Pentacles07.png' },
    { name: 'Eight of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: 'Eight', rank_number: 8, deck_order: 71, image_location: 'Pentacles08.png' },
    { name: 'Nine of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: 'Nine', rank_number: 9, deck_order: 72, image_location: 'Pentacles09.png' },
    { name: 'Ten of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: 'Ten', rank_number: 10, deck_order: 73, image_location: 'Pentacles10.png' },
    { name: 'Page of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: 'Page', rank_number: 11, deck_order: 74, image_location: 'Pentacles11.png' },
    { name: 'Knight of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: 'Knight', rank_number: 12, deck_order: 75, image_location: 'Pentacles12.png' },
    { name: 'Queen of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: 'Queen', rank_number: 13, deck_order: 76, image_location: 'Pentacles13.png' },
    { name: 'King of Pentacles', arcana: 'Minor', suit: 'Pentacles', rank: 'King', rank_number: 14, deck_order: 77, image_location: 'Pentacles14.png' }
];

majorArcana.forEach(card => {
    db.run(
        `INSERT INTO cards (name, arcana, suit, rank, rank_number, deck_order, meaning_upright, meaning_reversed, image_location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [card.name, card.arcana, card.suit, card.rank, card.rank_number, card.deck_order, card.meaning_upright, card.meaning_reversed, card.image_location]
    );
});

minorArcana.forEach(card => {
    db.run(
        `INSERT INTO cards (name, arcana, suit, rank, rank_number, deck_order, meaning_upright, meaning_reversed, image_location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [card.name, card.arcana, card.suit, card.rank, card.rank_number, card.deck_order, card.meaning_upright, card.meaning_reversed, card.image_location]
    );
})