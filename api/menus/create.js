const express = require('express');

const router = express.Router();
const Menu = require('./menu');

router.post(
  '/',
  (req, res) => {
    const { menu } = req.body;

    const newMenu = new Menu({
      menu,

      createdOn: Date.now(),
      updatedOn: Date.now(),
    });

    newMenu.save((err, data) => {
      if (err) res.json(err);
      res.json(data);
    });
  },
);

module.exports = router;
