const { Card } = require('../../models/card');
const { NotFoundError, ForbiddenError } = require('../../errors');

async function deleteCard(req, res, next) {
  try {
    const { cardId } = req.params;

    const card = await Card.findById(cardId).populate('owner').populate('likes');

    if (!card) {
      throw new NotFoundError('Карточка не найдена');
    }

    const ownerId = card.owner.id;
    const userId = req.user._id;

    if (ownerId !== userId) {
      throw new ForbiddenError('Нельзя удалить чужую карточку');
    }

    await Card.findByIdAndRemove(cardId);

    res.send(card);
  } catch (err) {
    next(err);
  }
}

module.exports = { deleteCard };
