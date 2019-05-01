const express = require('express');

const router = express.Router();
const Company = require('./company');

router.put(
  '/:id',
  (req, res) => {
    const { id } = req.params;
    const { company } = req.body;
    
    company.updatedOn = Date.now();

    Company
      .findOneAndUpdate(
        id,
        company,
        { new: true },
        (err, data) => {
          if (err) res.json(err);
          res.json(data);
        },
      );
  },
);

module.exports = router;
