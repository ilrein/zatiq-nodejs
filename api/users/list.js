const express = require('express');

const router = express.Router();
const User = require('./user');

router.get(
  '/',
  (req, res) => {
    const { page } = req.query;

    User.paginate(
      {}, // query
      {
        limit: 10,
        page: page || 1,
      },
    )
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
);

module.exports = router;
