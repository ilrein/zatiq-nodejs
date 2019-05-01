const express = require('express');

const router = express.Router();
const Company = require('./company');

router.get(
  '/:id',
  (req, res) => {
    const { id } = req.params;

    Company
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
