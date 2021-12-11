const healthCheckRoutes = require('./healthCheckRoutes');
const sessionRoutes = require('./sessionRoutes');
const caseRoutes = require('./caseRoutes');
const conditionRoutes = require('./conditionRoutes');

module.exports = (app) => {
  healthCheckRoutes(app);
  sessionRoutes(app);
  caseRoutes(app);
  conditionRoutes(app);
};
