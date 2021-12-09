const constants = require('../utils/constants');
const { minPoolSize, maxPoolSize } = constants.database;
const mongoose = require('mongoose');

async function init() {
  console.info(`Starting pool connection`);
  await mongoose.connect(constants.database.uri, { minPoolSize, maxPoolSize });
  console.info(`Pool connection established!`);
}

module.exports = init;
