const express = require('express');

const router = express.Router();
const Item = require('./item');

router.post(
  '/',
  (req, res) => {
    const { item } = req.body;

    console.log('creating item', item);

    const newItem = new Item({
      ...item,

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
