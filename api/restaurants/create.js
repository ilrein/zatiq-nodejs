const express = require('express');

const router = express.Router();
const Restaurant = require('./restaurant');

router.post(
  '/',
  (req, res) => {
    const { restaurant } = req.body;

    const newRestaurant = new Restaurant({
      ...restaurant,

      createdOn: Date.now(),
      updatedOn: Date.now(),
    });

    newRestaurant.save((err, data) => {
      if (err) res.json(err);
      res.json(data);
    });
  },
);

module.exports = router;
