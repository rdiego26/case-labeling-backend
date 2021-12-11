const { StatusCodes } = require('http-status-codes');
const sessionServiceInstance = require('../services').SessionService;

const PUBLIC_ROUTES = ['/api/login'];

module.exports = {
  checkToken: async (req, res, next) => {
    const token = req.headers['x-access-token'] || null;
    const requestURL = req.originalUrl;

    if (PUBLIC_ROUTES.includes(requestURL)) {
      next();
    } else if (!token) {
      res.status(StatusCodes.UNAUTHORIZED).json();
    } else {
      const fetchedData = await sessionServiceInstance.findActiveToken(token);

      if (!fetchedData) {
        res.status(StatusCodes.UNAUTHORIZED).json();
      } else {
        await sessionServiceInstance.increment(fetchedData.token);
        next();
      }
    }
  },
};
