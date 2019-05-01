const express = require('express');

const router = express.Router();
const Company = require('./company');

router.get(
  '/',
  (req, res) => {
    const { page } = req.query;

    Company.paginate(
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
