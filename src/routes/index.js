const healthCheckRoutes = require('./healthCheckRoutes');
const sessionRoutes = require('./sessionRoutes');

module.exports = (app) => {
  healthCheckRoutes(app);
  sessionRoutes(app);
};
