const crypto = require('crypto');

class SessionService {
  constructor(sessionModel) {
    this.sessionModel = sessionModel;
  }

  async create(userId) {
    const item = {
      userId,
      token: crypto.randomUUID(),
    };

    return this.sessionModel
      .create(item);
  }
}

module.exports = SessionService;
