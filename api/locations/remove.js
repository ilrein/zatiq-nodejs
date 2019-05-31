const express = require('express');

const router = express.Router();
const Location = require('./location');

router.delete(
  '/:id',
  (req, res) => {
    const { id } = req.params;

    Location
      .findByIdAndRemove(id, (err, data) => {
        if (err) res.json({ err });
        res.json(data);
      });
  },
);

module.exports = router;
