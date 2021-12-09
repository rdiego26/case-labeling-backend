const User = require('../models/user');
const UserService = require('../services/UserService');

const userService = new UserService(User);

module.exports = {
  UserService: userService,
};
