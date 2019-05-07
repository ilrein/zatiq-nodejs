const express = require('express');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const router = express.Router();

const userPool = require('../../config/pool-data').userPool;

router.post(
  '/logout',
  (req, res) => {
    const userData = {
      Username: req.body.email,
      Pool: userPool,
    };

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.globalSignOut({
      onFailure: e => res.json({ error: e }),
      onSuccess: data => res.json({ success: data }),
    });
  },
);

module.exports = router;
