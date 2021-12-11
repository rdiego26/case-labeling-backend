module.exports = (app) => {
  const controller = require('../controllers/caseController');
  const router = require('express').Router();

  router.get('/api/case/next', controller.getNextCase);

  app.use(router);
};
