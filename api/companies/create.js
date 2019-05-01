const express = require('express');

const router = express.Router();
const Company = require('./company');

router.post(
  '/',
  (req, res) => {
    const { company } = req.body;
    const {
      name,
    } = company;

    const newCompany = new Company({
      name,
      createdOn: Date.now(),
      updatedOn: Date.now(),
    });

    newCompany.save((err, data) => {
      if (err) res.json(err);
      res.json(data);
    });
  },
);

module.exports = router;
