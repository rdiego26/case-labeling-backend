const healthCheckRoutes = require('./healthCheckRoutes');
const sessionRoutes = require('./sessionRoutes');
const caseRoutes = require('./caseRoutes');

module.exports = (app) => {
  healthCheckRoutes(app);
  sessionRoutes(app);
  caseRoutes(app);
};
