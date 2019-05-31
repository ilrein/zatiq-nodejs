const express = require('express');

const Location = require('./location');
const {
  ItalicLog,
  Issue,
} = require('../../utils/logger');

const router = express.Router();

router.put(
  '/:id',
  (req, res) => {
    const { id } = req.params;
    const { location } = req.body;
    location.updatedOn = Date.now();
    
    Location
      .findByIdAndUpdate(
        id,
        location,
        { new: true },
        (err, data) => {
          if (err) {
            Issue(err);
            res.json(err);
          }
          ItalicLog('Updating location', data._id);
          res.json(data);
        },
      );
  },
);

module.exports = router;
