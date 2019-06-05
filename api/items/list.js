const express = require('express');

const router = express.Router();
const Item = require('./item');

router.get(
  '/',
  (req, res) => {
    const { page, limit } = req.query;

    Item.paginate(
      {}, // query
      {
        limit: Number(limit) || 10,
        page: page || 1,
      },
    )
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
);

module.exports = router;
