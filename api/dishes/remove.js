const express = require('express');

const router = express.Router();
const Dish = require('./dish');

router.delete(
  '/:id',
  (req, res) => {
    const { id } = req.params;

    Dish
      .findByIdAndRemove(id, (err, data) => {
        if (err) res.json({ err });
        res.json(data);
      });
  },
);

module.exports = router;
