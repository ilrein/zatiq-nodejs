const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const userPool = require('../config/pool-data').userPool;

function renew(username, refreshToken, cb) {
  const RefreshToken = new AmazonCognitoIdentity.CognitoRefreshToken({
    RefreshToken: refreshToken,
  });

  const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
    Username: username,
    Pool: userPool,
  });

  cognitoUser.refreshSession(RefreshToken, (err, session) => {
    if (err) {
      cb(err);
    } else {
      cb({
        access_token: session.accessToken.jwtToken,
        id_token: session.idToken.jwtToken,
        refresh_token: session.refreshToken.token,
      });
    }
  });
}

module.exports = renew;
