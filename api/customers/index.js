const express = require('express');

const app = express();

const loginOrCreate = require('./loginOrCreate');

const router = app.use('/customers', [
  loginOrCreate,
]);

module.exports = router;
