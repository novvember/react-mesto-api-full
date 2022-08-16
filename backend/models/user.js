const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      default: 'Жак-Ив Кусто',
    },
    about: {
      type: String,
      minlength: 2,
      maxlength: 30,
      default: 'Исследователь',
    },
    avatar: {
      type: String,
      default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
      validate: /https?:\/\/(www)?[0-9a-z\-._~:/?#[\]@!$&'()*+,;=]+#?$/i,
    },
  },
  {
    versionKey: false,
  },
);

const User = mongoose.model('user', userSchema);

module.exports = { User };
