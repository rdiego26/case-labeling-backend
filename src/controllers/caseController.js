const { StatusCodes } = require('http-status-codes');
const { CaseService } = require('../services');
const dayJs = require('dayjs');

module.exports = {

  getNextCase: async (req, res) => {
    try {
      console.log(`req._user=${JSON.stringify(req._user)}`);
      let result = await CaseService.getNextCase();

      return res.status(StatusCodes.OK).json(result);
    } catch (error) {
      console.log(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  },

  update: async (req, res) => {
    try {
      const { caseId } = req.params;
      const userId = req._user._id;
      const { labels, description } = req.body;
      const data = {
        description,
        labels,
        updateBy: userId,
        updatedAt: dayJs(),
      };
      let result = await CaseService.update(caseId, data);

      return res.status(StatusCodes.OK).json(result);
    } catch (error) {
      console.log(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  },

};
