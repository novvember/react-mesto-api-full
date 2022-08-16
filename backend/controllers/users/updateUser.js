const { User } = require('../../models/user');
const { NotFoundError } = require('../../errors');

async function updateUser(req, res, next) {
  try {
    const userId = req.user._id;
    const { name, about } = req.body;
    const user = await User.findByIdAndUpdate(
      userId,
      { name, about },
      { new: true, runValidators: true },
    );

    if (!user) {
      throw new NotFoundError('Пользователь не найден');
    }

    res.send(user);
  } catch (err) {
    next(err);
  }
}

module.exports = { updateUser };
