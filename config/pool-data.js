const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const poolData = {
  UserPoolId: 'us-east-1_VKPqFnURu',
  ClientId: '6b6rff4qhsbgrc2fjrpm99epnc',
};
const poolRegion = 'us-east-1';

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

module.exports = {
  poolData,
  poolRegion,
  userPool,
};
