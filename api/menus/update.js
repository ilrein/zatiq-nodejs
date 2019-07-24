const express = require('express');

const router = express.Router();
const Menu = require('./menu');

router.put(
  '/:id',
  (req, res) => {
    const { id } = req.params;
    const { menu } = req.body;
    
    menu.updatedOn = Date.now();

    Menu
      .findByIdAndUpdate(
        id,
        menu,
        { new: true },
        (err, data) => {
          if (err) res.json(err);
          res.json(data);
        },
      );
  },
);

module.exports = router;
