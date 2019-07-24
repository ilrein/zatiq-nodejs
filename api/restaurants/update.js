const express = require('express');

const router = express.Router();
const Restaurant = require('./restaurant');

router.put(
  '/:id',
  (req, res) => {
    const { id } = req.params;
    const { restaurant } = req.body;
    
    restaurant.updatedOn = Date.now();

    Restaurant
      .findByIdAndUpdate(
        id,
        restaurant,
        { new: true },
        (err, data) => {
          if (err) {
            res.json(err);
          } else {
            console.log('Updating restaurant', data);
            res.json(data);
          }
        },
      );
  },
);

module.exports = router;
