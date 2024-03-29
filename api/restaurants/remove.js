const express = require('express');

const router = express.Router();
const Restaurant = require('./restaurant');

router.delete(
  '/:id',
  (req, res) => {
    const { id } = req.params;

    Restaurant
      .findByIdAndRemove(id, (err, data) => {
        if (err) res.json({ err });
        res.json(data);
      });
  },
);

module.exports = router;
