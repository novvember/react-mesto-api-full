const { createUser } = require('./createUser');
const { getAllUsers } = require('./getAllUsers');
const { getCurrentUser } = require('./getCurrentUser');
const { getUser } = require('./getUser');
const { login } = require('./login');
const { updateAvatar } = require('./updateAvatar');
const { updateUser } = require('./updateUser');

module.exports = {
  createUser,
  getAllUsers,
  getCurrentUser,
  getUser,
  login,
  updateAvatar,
  updateUser,
};
