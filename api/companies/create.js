const express = require('express');

const router = express.Router();
const Company = require('./company');

router.post(
  '/',
  (req, res) => {
    const { company } = req.body;
    const {
      name,
      staff,
    } = company;

    console.log(staff);

    const newCompany = new Company({
      name,
      staff,

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
