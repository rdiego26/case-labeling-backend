const User = require('../models/user');
const UserService = require('../services/UserService');
const Session = require('../models/session');
const SessionService = require('../services/SessionService');
const Case = require('../models/case');
const CaseService = require('../services/CaseService');

const userService = new UserService(User);
const sessionService = new SessionService(Session);
const caseService = new CaseService(Case);

module.exports = {
  UserService: userService,
  SessionService: sessionService,
  CaseService: caseService,
};
