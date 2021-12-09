const appData = require('../../package.json');

const constants = {

  database: {
    uri: process.env.DATABASE_URI || 'mongodb://localhost:27017/erh',
    minPoolSize: process.env.DATABASE_MIN_POOL_SIZE || 3,
    maxPoolSize: process.env.DATABASE_MAX_POOL_SIZE || 5
  },

  app: {
    name: appData.name,
    limitItemsPerPage: process.env.LIMIT_ITEMS_PER_PAGE || 30,
    defaultPagePagination: 0,
  },

  server: {
    port: 3000,
  },

};

module.exports = constants;
