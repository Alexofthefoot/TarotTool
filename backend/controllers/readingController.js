import readingServices  from '../services/readingServices.js';

// ...readings/
function getAllReadings(req, res) {
    // check for limit/ offset
    const limit = parseInt(req.query.limit, 10) || 20;   // The 10 is a radix, default to 20
    const offset = parseInt(req.query.offset, 10) || 0;  // Default to start at index 0
    readingServices.getAllReadings(limit, offset, (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            res.status(200).json(rows);
        }
    })
};

function createReading(req, res) {
    const { title, question, interpretation } = req.body;
    readingServices.createReading(title, question, interpretation, (err, data) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            res.status(200).json(data);
        }
    })
};

//...readings/id
function getReading(req, res) {
    readingServices.getReading(req.params.id, (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else if (!rows) {
            res.status(404).send('Reading does not exist in DB.');
        }
        else {
            res.status(200).json(rows);
        }
    })
};

function updateReading(req, res) {
    const { id, title, question, notes } = req.body;
    readingServices.updateReading(req.params.id, title, question, notes, (err, data) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else if (data.changes === 0) {
            res.status(404).send('Reading does not exist in DB.');
        }
        else {
            res.status(200).send(`Reading with ID : ${req.params.id} is updated.`);
        }
    })
};

function deleteReading(req, res) {
readingServices.deleteReading(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else if (data.changes === 0) {
            res.status(404).send('Reading does not exist in DB.');
        }
        else {
            res.status(200).send(`Reading with ID : ${req.params.id} is deleted.`);
        }
    })
};

// ...readings/:id/cards
function getCardsPerReading(req, res) {
    readingServices.getCardsPerReading(req.params.id, (err, rows) => {
        if (err) {
            res.status(500).json(err.message);
        }
        else if (!rows) {
            res.status(404).json('Reading ' + req.params.id + ' does not exist in DB.');
        }
        else {
            res.status(200).json(rows);
        }
    })
}

const readingController =  {
    getAllReadings,
    createReading,
    getReading,
    updateReading,
    deleteReading, 
    getCardsPerReading
};

export default readingController