const crypto = require('crypto');
const AlgorithmEnum = require('../enums/Algorithm');

class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async findById(id) {
    const query = {
      _id: id,
    };
    return this.userModel
      .findOne(query);
  }

  async findWithCredentials(email, password) {
    const query = {
      email, password: crypto.createHmac(AlgorithmEnum.SHA_256, password).digest('hex'),
    };
    return this.userModel
      .findOne(query);
  }
}

module.exports = UserService;
