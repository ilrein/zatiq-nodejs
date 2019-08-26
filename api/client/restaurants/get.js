const express = require('express');

const router = express.Router();
const Restaurant = require('../../restaurants/restaurant');

router.get(
  '/:id',
  (req, res) => {
    const { id } = req.params;

    Restaurant
      .findById(
        id,
        (err, data) => {
          if (err) res.json({ err });
          res.json(data);
        },
      );
  },
);

module.exports = router;
