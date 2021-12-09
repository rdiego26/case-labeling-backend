const constants = require('../utils/constants');
const mongoose = require('mongoose');

async function init() {
  console.info(`Starting connection with database`);
  await mongoose.connect(constants.database.uri);
  console.info(`Connection established!`);
}

module.exports = init;
