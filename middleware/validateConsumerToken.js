const fetch = require('isomorphic-fetch');

const { Issue } = require('../utils/logger');

/* eslint-disable no-plusplus, no-useless-return */

function ValidateToken(token, cb) {
  fetch(`https://graph.facebook.com/me?access_token=${token}`)
    .then(response => response.json())
    .then((json) => {
      if (json.error) {
        cb({ error: true });
      } else {
        cb(true);
      }
    });
}

module.exports = (req, res, next) => {
  ValidateToken(
    req.headers.token,
    
    (response) => {
      if (response.error) {
        Issue(response.error);
        res.status(403).send('Session has expired');
        return;
      }
      next();
    },
  );
};
