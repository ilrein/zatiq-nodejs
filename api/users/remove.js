const express = require('express');

const router = express.Router();
const User = require('./user');

router.delete(
  '/:sub',
  (req, res) => {
    const { sub } = req.params;

    User
      .findOneAndRemove({
        sub,
      }, (err, data) => {
        if (err) res.json({ err });
        res.json(data);
      });
  },
);

module.exports = router;
