const express = require('express');

const router = express.Router();
const User = require('./user');

router.get(
  '/:sub',
  (req, res) => {
    const { sub } = req.params;

    User
      .findOne({
        sub,
      }, (err, data) => {
        if (err) res.json({ err });
        res.json(data);
      });
  },
);

module.exports = router;
