'use strict';
const express = require('express');
const product = require('../models/products/products-collection.js');
const router = express.Router();

router.post('/products', createOne);
router.get('/products', readAll);
router.get('/products/:id', readOne);
router.put('/products/:id', updateOne);
router.delete('/products/:id', deleteOne);

function createOne(req, res, next) {
  product
    .create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      next(err.message);
    });
}
function readAll(req, res, next) {
  product
    .read()
    .then((data) => res.json(data))
    .catch((err) => {
      next(err.message);
    });
}
function readOne(req, res, next) {
  product
    .read(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => {
      next(err.message);
    });
}
function updateOne(req, res, next) {
  product
    .update(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      next(err.message);
    });
}
function deleteOne(req, res, next) {
  product
    .delete(req.params.id)
    .then(res.send('Deleted.'))
    .catch((err) => {
      next(err.message);
    });
}
module.exports = router;
