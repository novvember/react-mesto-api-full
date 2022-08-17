const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../errors');

const { NODE_ENV, JWT_SECRET } = process.env;

function auth(req, res, next) {
  try {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new UnauthorizedError(
        'Для выполнения действия необходима авторизация',
      );
    }

    const token = authorization.replace('Bearer ', '');
    let payload;

    try {
      payload = jwt.verify(
        token,
        NODE_ENV === 'production' ? JWT_SECRET : 'secret',
      );
    } catch (err) {
      throw new UnauthorizedError(
        'Для выполнения действия необходима авторизация',
      );
    }

    req.user = payload;
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = { auth };
