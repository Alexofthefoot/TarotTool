import reading_cardServices from '../services/reading_cardServices.js';

function getAllReadingCards(req, res) {
    reading_cardServices.getAllReadingCards((err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            res.status(200).json(rows);
        }
    })
};

function createReadingCard(req, res) {
    // Normalize input to handle either single object or array
    const readingCards = Array.isArray(req.body) ? req.body : [req.body];
    // const { reading_id, card_id, position_number, position_name, is_reversed, notes, interpretation, reflection } = readingCard;
    reading_cardServices.createReadingCard(readingCards, (err, data) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            res.status(200).json(data);
        }
    });
};

function deleteReadingCard(req, res) {
    reading_cardServices.deleteReadingCard(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else if (data.changes === 0) {
            res.status(404).send('Reading Card does not exist in DB.');
        }
        else {
            res.status(200).send(`Reading Card with ID : ${req.params.id} is deleted.`);
        }
    })
};

const reading_cardController = {
    getAllReadingCards,
    createReadingCard,
    deleteReadingCard
};

export default reading_cardController