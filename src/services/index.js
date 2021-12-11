const User = require('../models/user');
const UserService = require('../services/UserService');
const Session = require('../models/session');
const SessionService = require('../services/SessionService');

const userService = new UserService(User);
const sessionService = new SessionService(Session);

module.exports = {
  UserService: userService,
  SessionService: sessionService,
};
