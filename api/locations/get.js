const express = require('express');

const router = express.Router();
const Location = require('./location');

router.get(
  '/:id',
  (req, res) => {
    const { id } = req.params;

    Location
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
