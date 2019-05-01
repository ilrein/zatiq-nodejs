const express = require('express');

const app = express();

const login = require('./login');
const register = require('./register');
const verify = require('./verify');
// const logout = require('./logout');

const router = app.use('/auth', [
  login,
  register,
  verify,
]);

module.exports = router;
