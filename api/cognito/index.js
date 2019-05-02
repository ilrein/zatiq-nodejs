const express = require('express');

const app = express();

const login = require('./login');
const register = require('./register');
const verify = require('./verify');
// const logout = require('./logout');
const renew = require('./renew');

const router = app.use('/auth', [
  login,
  register,
  verify,
  renew,
]);

module.exports = router;
