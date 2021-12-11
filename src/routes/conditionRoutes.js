module.exports = (app) => {
  const controller = require('../controllers/conditionController');
  const router = require('express').Router();

  router.get('/api/condition', controller.getAll);

  app.use(router);
};
