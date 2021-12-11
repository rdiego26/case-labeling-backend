const { StatusCodes } = require('http-status-codes');
const { ConditionService } = require('../services');

module.exports = {

  getAll: async (req, res) => {
    try {
      let result = await ConditionService.getAll();

      return res.status(StatusCodes.OK).json(result);
    } catch (error) {
      console.log(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  },

};
