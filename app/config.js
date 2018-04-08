'use strict';

export default {
  database: {
    uri: process.env.DB_URI || 'mongodb://localhost/tectonic'
  },
  mode: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 8080,
};
