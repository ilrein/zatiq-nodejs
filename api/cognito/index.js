const express = require('express');

const app = express();

const login = require('./login');
// const logout = require('./logout');

const router = app.use('/auth', [
  login,
  // logout,
]);

module.exports = router;
