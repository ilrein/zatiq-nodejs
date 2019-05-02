const express = require('express');

const router = express.Router();
const Item = require('./item');

router.put(
  '/:id',
  (req, res) => {
    const { id } = req.params;
    const { item } = req.body;
    
    item.updatedOn = Date.now();

    Item
      .findOneAndUpdate(
        id,
        item,
        { new: true },
        (err, data) => {
          if (err) res.json(err);
          res.json(data);
        },
      );
  },
);

module.exports = router;
