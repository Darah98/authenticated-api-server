'use strict';
module.exports = (err, req, res, next) => {
  res.status(500);
  res.statusMessage = 'Sorry, internal server error!';
  res.json({ error: err });
};
