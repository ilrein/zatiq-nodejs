const express = require('express');

const router = express.Router();
const Location = require('./location');

router.get(
  '/',
  (req, res) => {
    const { companyId, page } = req.query;

    console.log('getting location', companyId, Date.now());

    Location.paginate(
      {
        companyId,
      },
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
