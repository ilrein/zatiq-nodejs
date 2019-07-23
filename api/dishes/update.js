const express = require('express');

const router = express.Router();
const Dish = require('./dish');

router.put(
  '/:id',
  (req, res) => {
    const { id } = req.params;
    const { dish } = req.body;
    
    dish.updatedOn = Date.now();

    if (dish.variations.length > 0) {
      dish.price = dish.variations[0].price;
    }

    console.log('updating dish', dish);

    Dish
      .findByIdAndUpdate(
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
