const express = require('express');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const router = express.Router();

const userPool = require('../../config/pool-data').userPool;

router.post(
  '/login',
  (req, res) => {
    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
      Username: req.body.username,
      Password: req.body.password,
    });

    console.log(req.body);

    const userData = {
      Username: req.body.username,
      Pool: userPool,
    };
    
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: result => res.json(result),
      onFailure: err => res.json(err),
    });
  },
);

module.exports = router;
