'use strict';
module.exports = (req, res) => {
  res.status(404);
  res.statusMessage = 'page not found';
  res.json({ error: 'Not Found' });
};
