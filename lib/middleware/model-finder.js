'use strict';
const category = require('../models/categories/categories-collection.js');
const product = require('../models/products/products-collection.js');

module.exports = (req, res, next) => {
  const model = req.params.model;
  if (model === 'categories') {
    req.model = category;
    next();
    return;
  } else if (model === 'products') {
    req.model = product;
    next();
    return;
  } else {
    next('invalid model');
    return;
  }
};
