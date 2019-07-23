const express = require('express');

const router = express.Router();
const Dish = require('./dish');

router.get(
  '/',
  (req, res) => {
    const {
      page,
      limit,
      restaurantId,
    } = req.query;

    Dish.paginate(
      {
        restaurantId,
      }, // query
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
