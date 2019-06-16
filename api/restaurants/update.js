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
      .findOneAndUpdate(
        id,
        Restaurant,
        { new: true },
        (err, data) => {
          if (err) res.json(err);
          res.json(data);
        },
      );
  },
);

module.exports = router;
