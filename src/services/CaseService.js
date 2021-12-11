class CaseService {
  constructor(caseModel) {
    this.caseModel = caseModel;
  }

  async update(caseId, data) {
    const query = {
      _id: caseId,
    };
    return this.caseModel
      .updateOne(query, data);
  }

  async getNextCase() {
    const query = {
      updatedBy: {
        $eq: null
      },
    };
    return this.caseModel
      .findOne(query);
  }
}

module.exports = CaseService;
