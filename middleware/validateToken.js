const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');

const JWKS = require('../config/jwks');
const { Issue } = require('../utils/logger');

/* eslint-disable no-plusplus, no-useless-return */

function ValidateToken(token, refreshToken, cb) {
  // console.log(token, refreshToken, cb);
  const pems = {};
  const keys = JWKS.keys;
  for (let i = 0; i < keys.length; i++) {
    // Convert each key to PEM
    const keyId = keys[i].kid;
    const modulus = keys[i].n;
    const exponent = keys[i].e;
    const keyType = keys[i].kty;
    const jwk = { kty: keyType, n: modulus, e: exponent };
    const pem = jwkToPem(jwk);
    pems[keyId] = pem;
  }
  // validate the token
  const decodedJwt = jwt.decode(token, { complete: true });
  if (!decodedJwt) {
    cb({ error: 'cannot decode token' });
    return;
  }

  const kid = decodedJwt.header.kid;
  const pem = pems[kid];
  if (!pem) {
    cb({ error: 'pem failed' });
    return;
  }

  jwt.verify(token, pem, (err, payload) => {
    if (err) {
      cb({ error: 'verification failed' });
      return;
    }
    cb(payload);
    return;
  });
}

module.exports = (req, res, next) => {
  ValidateToken(
    req.headers['jwt-token'],
    req.headers['refresh-token'],
    
    (response) => {
      if (response.error) {
        Issue(response.error);
        res.sendStatus(403);
        return;
      }
      next();
    },
  );
};
