const express = require('express');

const router = express.Router();
const User = require('./user');

router.post(
  '/',
  (req, res) => {
    const { user } = req.body;

    const newUser = new User({
      user,
      
      createdOn: Date.now(),
      updatedOn: Date.now(),
    });

    newUser.save((err, data) => {
      if (err) res.json(err);
      res.json(data);
    });
  },
);

module.exports = router;
