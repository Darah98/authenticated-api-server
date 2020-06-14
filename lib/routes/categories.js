'use strict';
const express = require('express');
const category = require('../models/categories/categories-collection.js');
const router = express.Router();

router.post('/categories', createOne);
router.get('/categories', readAll);
router.get('/categories/:id', readOne);
router.put('/categories/:id', updateOne);
router.delete('/categories/:id', deleteOne);

function createOne(req, res, next) {
  category
    .create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      next(err.message);
    });
}
function readAll(req, res, next) {
  category
    .read()
    .then((data) => res.json(data))
    .catch((err) => {
      next(err.message);
    });
}
function readOne(req, res, next) {
  category
    .read(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => {
      next(err.message);
    });
}
function updateOne(req, res, next) {
  category
    .update(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      next(err.message);
    });
}
function deleteOne(req, res, next) {
  category
    .delete(req.params.id)
    .then(res.send('Deleted.'))
    .catch((err) => {
      next(err.message);
    });
}
module.exports = router;
