const express = require('express');

const router = express.Router();
const Menu = require('./menu');

router.get(
  '/',
  (req, res) => {
    const {
      page,
      restaurantId,
    } = req.query;

    Menu.paginate(
      {
        restaurantId,
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
