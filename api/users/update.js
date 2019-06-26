const express = require('express');

const User = require('./user');
const {
  ItalicLog,
  Issue,
} = require('../../utils/logger');

const router = express.Router();

router.put(
  '/:id',
  (req, res) => {
    const { id } = req.params;
    const { user } = req.body;
    
    user.updatedOn = Date.now();
    
    User
      .findByIdAndUpdate(
        id,
        user,
        { new: true },
        (err, data) => {
          if (err) {
            Issue(err);
            res.json(err);
          }
          ItalicLog('Updating user', data._id);
          res.json(data);
        },
      );
  },
);

module.exports = router;
