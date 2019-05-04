const express = require('express');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const router = express.Router();

const userPool = require('../../config/pool-data').userPool;

router.post(
  '/verify',
  (req, res) => {
    const { email, code } = req.body;

    const userData = {
      Username: email,
      Pool: userPool,
    };

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.confirmRegistration(
      code,
      true,
      (err, result) => {
        if (err) {
          res.status(500).json(JSON.stringify(err));
        }
        
        res.json({ data: result });
      },
    );
  },
);

module.exports = router;
