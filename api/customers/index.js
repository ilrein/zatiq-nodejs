const express = require('express');

const app = express();

const findOrCreate = require('./findOrCreate');

const router = app.use('/customers', [
  findOrCreate,
]);

module.exports = router;
