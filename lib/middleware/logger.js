'use strict';
// const timeReq= require('./timestamp.js');
module.exports = (req, res, next) => {
  console.log(`Request ${req.method} on ${req.path} @`);
  next();
};
