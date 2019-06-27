const express = require('express');

const router = express.Router();
const Dish = require('./dish');

router.get(
  '/:id',
  (req, res) => {
    const { id } = req.params;

    Dish
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
