const { StatusCodes } = require('http-status-codes');
const { CaseService } = require('../services');

module.exports = {

  getNextCase: async (req, res) => {
    try {
      let result = await CaseService.getNextCase();

      return res.status(StatusCodes.OK).json(result);
    } catch (error) {
      console.log(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  },

};
