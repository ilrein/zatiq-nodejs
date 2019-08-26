const express = require('express');

const router = express.Router();
const Customer = require('./customer');

router.post(
  '/',
  (req, res) => {
    const { customer } = req.body;
    const { sub } = customer;
    // console.log(id);

    Customer.findOne(
      {
        sub,
      },
      (err, data) => {
        if (err) res.json(err);
        if (data === null) {
          const newCustomer = new Customer({
            ...customer,
            
            createdOn: Date.now(),
            updatedOn: Date.now(),
          });
      
          newCustomer.save((error, result) => {
            if (error) res.json(error);
            res.json(result);
          });
        } else {
          res.json(data);
        }
      },
    );
  },
);

module.exports = router;
