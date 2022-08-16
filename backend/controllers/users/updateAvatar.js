const { User } = require('../../models/user');
const { NotFoundError } = require('../../errors');

async function updateAvatar(req, res, next) {
  try {
    const userId = req.user._id;
    const { avatar } = req.body;
    const user = await User.findByIdAndUpdate(
      userId,
      { avatar },
      { new: true },
    );

    if (!user) {
      throw new NotFoundError('Пользователь не найден');
    }

    res.send(user);
  } catch (err) {
    next(err);
  }
}

module.exports = { updateAvatar };
