const express = require('express');

const router = express.Router();
const Restaurant = require('./restaurant');

router.get(
  '/',
  (req, res) => {
    const { page } = req.query;

    Restaurant.paginate(
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
