const { StatusCodes } = require('http-status-codes');
const { SessionService, UserService } = require('../services');

const PUBLIC_ROUTES = ['/api/login'];

module.exports = {
  checkToken: async (req, res, next) => {
    const token = req.headers['x-access-token'] || null;
    const requestURL = req.originalUrl;

    if (PUBLIC_ROUTES.includes(requestURL)) {
      next();
    } else if (!token) {
      res.status(StatusCodes.UNAUTHORIZED).json({
        message: 'Missing token!'
      });
    } else {
      const fetchedSession = await SessionService.findActiveToken(token);

      if (!fetchedSession) {
        res.status(StatusCodes.UNAUTHORIZED).json({
          message: 'Session expired!'
        });
      } else {
        req._user = await UserService.findById(fetchedSession.userId);
        await SessionService.increment(fetchedSession.token);
        next();
      }
    }
  },
};
