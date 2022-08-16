const { Card } = require('../../models/card');

async function getAllCards(req, res, next) {
  try {
    const cards = await Card.find({}).populate('owner').populate('likes');
    res.send(cards);
  } catch (err) {
    next(err);
  }
}

module.exports = { getAllCards };
