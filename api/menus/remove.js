const express = require('express');

const router = express.Router();
const Menu = require('./menu');

router.delete(
  '/:id',
  (req, res) => {
    const { id } = req.params;

    Menu
      .findByIdAndRemove(id, (err, data) => {
        if (err) res.json({ err });
        res.json(data);
      });
  },
);

module.exports = router;
