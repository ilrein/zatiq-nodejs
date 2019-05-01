const express = require('express');

const app = express();

const list = require('./list');
const get = require('./get');
const create = require('./create');
const update = require('./update');

const router = app.use('/companies', [
  list,
  get,
  create,
  update,
]);

module.exports = router;
