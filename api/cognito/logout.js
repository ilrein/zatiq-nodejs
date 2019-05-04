const express = require('express');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const router = express.Router();

const userPool = require('../../config/pool-data').userPool;

router.post(
  '/logout',
  (req, res) => {
    const userData = {
      Username: req.body.username,
      Pool: userPool,
    };

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.globalSignOut({
      onFailure: () => res.json('error'),
      onSuccess: () => res.json('success'),
    });
  },
);

module.exports = router;
