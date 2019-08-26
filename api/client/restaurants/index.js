const express = require('express');

const app = express();

const get = require('./get');
const list = require('./list');

const router = app.use('/restaurants', [
  get,
  list,
]);

module.exports = router;
