const express = require('express');

const router = express.Router();
const Dish = require('./dish');

router.put(
  '/:id',
  (req, res) => {
    const { id } = req.params;
    const { dish } = req.body;
    
    dish.updatedOn = Date.now();

    Dish
      .findOneAndUpdate(
        id,
        dish,
        { new: true },
        (err, data) => {
          if (err) res.json(err);
          res.json(data);
        },
      );
  },
);

module.exports = router;
