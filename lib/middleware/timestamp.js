'use strict';
const d= new Date();
module.exports = (req, res, next) => {
  req.requestTime = console.log(`${d.getHour()}:${d.getMinutes()}:${d.getSeconds()} -- ${d.getMonth()} ${d.getDate()}, ${d.getFullYear()}`);
  next();
};