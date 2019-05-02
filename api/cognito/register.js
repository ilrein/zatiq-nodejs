const express = require('express');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const router = express.Router();

const userPool = require('../../config/pool-data').userPool;

router.post(
  '/register',
  (req, res) => {
    const { email, password } = req.body;

    const attributeList = [];

    const dataEmail = {
      Name: 'email',
      Value: email,
    };

    const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

    attributeList.push(attributeEmail);

    userPool.signUp(
      email,
      password,
      attributeList,
      null,
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json(JSON.stringify(err));
          return;
        }

        const cognitoUser = result.user;
        res.status(201).json(`Created user ${cognitoUser.getUsername()}`);
      },
    );
  },
);

module.exports = router;
