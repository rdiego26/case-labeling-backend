const { StatusCodes } = require('http-status-codes');
const UserService = require('../services').UserService;

module.exports = {

  findByCredentials: async (req, res) => {
    try {
      const email = req.body.email || '';
      const password = req.body.password || '';

      let fetchedUser = await UserService.findWithCredentials(email, password);
      const code = fetchedUser ? StatusCodes.OK : StatusCodes.UNAUTHORIZED;

      return res.status(code).json(fetchedUser);
    } catch (error) {
      console.log(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  },

};
