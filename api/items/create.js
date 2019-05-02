const express = require('express');

const router = express.Router();
const Item = require('./item');

router.post(
  '/',
  (req, res) => {
    const { item } = req.body;
    const {
      name,
      imageURI,
      description,
      price,
    } = item;

    const newItem = new Item({
      name,
      imageURI,
      description,
      price,

      createdOn: Date.now(),
      updatedOn: Date.now(),
    });

    newItem.save((err, data) => {
      if (err) res.json(err);
      res.json(data);
    });
  },
);

module.exports = router;
