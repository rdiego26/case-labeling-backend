class ConditionService {
  constructor(conditionModel) {
    this.conditionModel = conditionModel;
  }

  async getAll() {
    return this.conditionModel
      .find({});
  }
}

module.exports = ConditionService;
