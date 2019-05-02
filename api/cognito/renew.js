const express = require('express');

const router = express.Router();

const renew = require('../../utils/refreshToken');

router.post(
  '/renew',
  (req, res) => {
    const { username } = req.headers;
    const refreshToken = req.headers['refresh-token'];
    
    renew(username, refreshToken, (data) => {
      console.log(data);
      res.json(data);
    });
  },
);

module.exports = router;
