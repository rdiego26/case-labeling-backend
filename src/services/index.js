const User = require('../models/user');
const UserService = require('../services/UserService');
const Session = require('../models/session');
const SessionService = require('../services/SessionService');
const Case = require('../models/case');
const CaseService = require('../services/CaseService');
const Condition = require('../models/condition');
const ConditionService = require('../services/ConditionService');

const userService = new UserService(User);
const sessionService = new SessionService(Session);
const caseService = new CaseService(Case);
const conditionService = new ConditionService(Condition);

module.exports = {
  UserService: userService,
  SessionService: sessionService,
  CaseService: caseService,
  ConditionService: conditionService,
};
