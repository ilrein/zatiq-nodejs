const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const poolData = {
  UserPoolId: 'us-east-1_ywfQHLtLV',
  ClientId: '157ltl1mnj4aiaqkg0sjpsnepv',
};
const poolRegion = 'us-east-1';

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

module.exports = {
  poolData,
  poolRegion,
  userPool,
};
