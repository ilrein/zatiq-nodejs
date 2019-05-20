const express = require('express');

const router = express.Router();
const Location = require('./location');

router.post(
  '/',
  (req, res) => {
    const { location } = req.body;
    const {
      companyId,
      image,
      address,
    } = location;

    // console.log('attempting to save new location', location);

    const newLocation = new Location({
      companyId,
      image,
      address,
      
      createdOn: Date.now(),
      updatedOn: Date.now(),
    });

    newLocation.save((err, data) => {
      if (err) res.json(err);
      res.json(data);
    });
  },
);

module.exports = router;
