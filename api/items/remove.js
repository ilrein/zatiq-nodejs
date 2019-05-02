const express = require('express');

const router = express.Router();
const Item = require('./item');

router.delete(
  '/:id',
  (req, res) => {
    const { id } = req.params;

    Item
      .findByIdAndRemove(id, (err, data) => {
        if (err) res.json({ err });
        res.json(data);
      });
  },
);

module.exports = router;
