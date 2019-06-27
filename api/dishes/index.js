const express = require('express');

const app = express();

const list = require('./list');
const get = require('./get');
const create = require('./create');
const update = require('./update');
const remove = require('./remove');

const router = app.use('/dishes', [
  list,
  get,
  create,
  update,
  remove,
]);

module.exports = router;
