'use strict';
module.exports = (req, res, next) => {
  res.status(404);
  res.statusMessage = 'page not found';
  res.json({ error: 'Not Found' });
};
