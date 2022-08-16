const mongoose = require('mongoose');

function validateObjectId(value) {
  const isValid = mongoose.isValidObjectId(value);

  if (isValid) return value;

  throw new Error('ID is not valid');
}

module.exports = { validateObjectId };
