const express = require('express');

const router = express.Router();
const Dish = require('./dish');

router.post(
  '/',
  (req, res) => {
    const { dish } = req.body;

    console.log('creating dish', dish);

    const newDish = new Dish({
      ...dish,

      createdOn: Date.now(),
      updatedOn: Date.now(),
    });

    newDish.save((err, data) => {
      if (err) res.json(err);
      res.json(data);
    });
  },
);

module.exports = router;
