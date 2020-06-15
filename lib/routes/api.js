'use strict';
const express = require('express');
const modelFinder = require('../middleware/model-finder.js');
const router = express.Router();
const bearer= require('../../auth/middleware/bearer.js');
const permission= require('../../auth/middleware/authorize.js');

router.param('model', modelFinder);
router.post('/:model', bearer, permission('create'), createOne);
router.get('/:model', bearer, permission('read'), readAll);
router.get('/:model/:id', bearer, permission('read'), readOne);
router.put('/:model/:id', bearer, permission('update'), updateOne);
router.delete('/:model/:id', bearer, permission('delete'), deleteOne);

function createOne(req, res, next) {
  req.model
    .create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      next(err.message);
    });
}
function readAll(req, res, next) {
  req.model
    .read()
    .then((data) => res.json(data))
    .catch((err) => {
      next(err.message);
    });
}
function readOne(req, res, next) {
  req.model
    .read(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => {
      next(err.message);
    });
}
function updateOne(req, res, next) {
  req.model
    .update(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      next(err.message);
    });
}
function deleteOne(req, res, next) {
  req.model
    .delete(req.params.id)
    .then(res.send('Deleted.'))
    .catch((err) => {
      next(err.message);
    });
}
module.exports = router;
