const express = require('express');

const router = express.Router();
const Item = require('./item');

router.get(
  '/:id',
  (req, res) => {
    const { id } = req.params;

    Item
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
