const express = require('express');

const router = express.Router();
const Company = require('./company');

router.delete(
  '/:id',
  (req, res) => {
    const { id } = req.params;

    Company
      .findByIdAndRemove(id, (err, data) => {
        if (err) res.json({ err });
        res.json(data);
      });
  },
);

module.exports = router;
