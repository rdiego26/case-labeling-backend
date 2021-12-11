const crypto = require('crypto');
const dayJs = require('dayjs');

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

  async invalidateToken(token) {
    const query = {
      token,
    };
    const body = {
      expiresAt: dayJs(),
    };

    return this.sessionModel
      .updateOne(query, body);
  }

  async findActiveToken(token) {
    const query = {
      token,
      expiresAt: {
        $gt: dayJs(),
      },
    };

    return this.sessionModel
      .findOne(query);
  }

  async increment(token) {
    const query = {
      token,
      expiresAt: {
        $gt: dayJs(),
      },
    };
    const body = {
      expiresAt: dayJs().add(1, 'hours')
    };

    return this.sessionModel
      .updateOne(query, body);
  }
}

module.exports = SessionService;
