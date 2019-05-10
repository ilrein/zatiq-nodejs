const express = require('express');

const router = express.Router();
const Location = require('./location');

router.post(
  '/',
  (req, res) => {
    const { location } = req.body;

    const newLocation = new Location({
      ...location,
      
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
