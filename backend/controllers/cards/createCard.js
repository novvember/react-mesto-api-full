const { Card } = require('../../models/card');
const { ValidationError } = require('../../errors');

async function createCard(req, res, next) {
  try {
    const { name, link } = req.body;
    const ownerId = req.user._id;
    const card = await Card.create({ name, link, owner: ownerId });
    await card.populate('owner');
    await card.populate('likes');
    res.status(201).send(card);
  } catch (err) {
    if (err.name === 'CastError' || err.name === 'ValidationError') {
      next(new ValidationError(`Неверные данные в ${err.path ?? 'запросе'}`));
      return;
    }

    next(err);
  }
}

module.exports = { createCard };
