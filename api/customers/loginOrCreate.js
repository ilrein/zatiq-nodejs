const express = require('express');

const router = express.Router();
const Customer = require('./customer');

router.post(
  '/',
  (req, res) => {
    const { customer } = req.body;

    console.log(customer);

    res.status(200);

    // const newCustomer = new Customer({
    //   ...customer,
      
    //   createdOn: Date.now(),
    //   updatedOn: Date.now(),
    // });

    // newCustomer.save((err, data) => {
    //   if (err) res.json(err);
    //   res.json(data);
    // });
  },
);

module.exports = router;
