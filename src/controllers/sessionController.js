const { StatusCodes } = require('http-status-codes');
const { UserService, SessionService } = require('../services');

module.exports = {

  findByCredentials: async (req, res) => {
    try {
      const { email, password } = req.body;

      let fetchedUser = await UserService.findWithCredentials(email, password);

      if (!fetchedUser) {
        return res.status(StatusCodes.UNAUTHORIZED).json();
      }

      const createdSession = await SessionService.create(fetchedUser._id);
      const result = {
        name: fetchedUser.name,
        email: fetchedUser.email,
        token: createdSession.token,
        expiresAt: createdSession. expiresAt,
      };

      return res.status(StatusCodes.OK).json(result);
    } catch (error) {
      console.log(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  },

  logout: async (req, res) => {
    try {
      const token = req.headers['x-access-token'];

      await SessionService.invalidateToken(token);

      return res.status(StatusCodes.OK).json();
    } catch (error) {
      console.log(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  },

};
