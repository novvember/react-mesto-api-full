const { createCard } = require('./createCard');
const { deleteCard } = require('./deleteCard');
const { getAllCards } = require('./getAllCards');
const { putLike } = require('./putLike');
const { deleteLike } = require('./deleteLike');

module.exports = {
  createCard,
  deleteCard,
  getAllCards,
  putLike,
  deleteLike,
};
