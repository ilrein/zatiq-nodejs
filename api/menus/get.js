const express = require('express');

const router = express.Router();
const Menu = require('./menu');

router.get(
  '/:id',
  (req, res) => {
    const { id } = req.params;

    Menu
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
