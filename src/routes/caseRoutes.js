module.exports = (app) => {
  const controller = require('../controllers/caseController');
  const router = require('express').Router();
  const { Validator } = require('express-json-validator-middleware');
  const { validate } = new Validator();
  const updateSchema = require('../jsonSchemas/case/update');

  router.get('/api/case/next', controller.getNextCase);
  router.put('/api/case/:caseId', validate({ body: updateSchema }), controller.update);

  app.use(router);
};
