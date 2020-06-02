'use strict';
require('dotenv').config();
const express = require('express');
const logReq = require('./middleware/logger.js');
const err404 = require('./middleware/404.js');
const err500 = require('./middleware/500.js');
const app = express();

app.use(express.json());
app.use(logReq);

let db = [];

app.post('/api/v1/products', (req, res) => {
  const { category, name, display_name, description } = req.body;
  const product = { category, name, display_name, description };
  product._id = db.length + 1;
  db.push(product);
  res.status(200).json(product);
});
app.get('/api/v1/products', (req, res) => {
  const count = db.length;
  const results = db;
  res.status(200).json({ count, results });
});
app.get('/api/v1/products/:id', (req, res) => {
  const myid = req.params.id;
  db.forEach((product) => {
    if (product._id == myid) {
      res.status(200).json({ product });
    }
  });
});
app.put('/api/v1/products/:id', (req, res) => {
  const myid = req.params.id;
  db.forEach((product) => {
    if (product._id == myid) {
      product = req.body;
      product._id= db.length;
      db[myid]= product;
      res.status(200).json({ db });
    }
  });
});
app.delete('/api/v1/products/:id', (req, res)=>{
  const myid= req.params.id;
  db.forEach(product=>{
    if(product._id==myid){
      const index= db.indexOf(product);
      db.splice(index, 1);
      res.status(200).json(db);
    }
  });
});
app.post('/api/v1/categories', (req, res) => {
  const { name, display_name, description } = req.body;
  const category = { name, display_name, description };
  category._id = db.length + 1;
  db.push(category);
  res.status(200).json(category);
});
app.get('/api/v1/categories', (req, res) => {
  const count = db.length;
  const results = db;
  res.status(200).json({ count, results });
});
app.get('/api/v1/categories/:id', (req, res) => {
  const myid = req.params.id;
  db.forEach((category) => {
    if (category._id == myid) {
      res.status(200).json({ category });
    }
  });
});
app.put('/api/v1/categories/:id', (req, res) => {
  const myid = req.params.id;
  db.forEach((category) => {
    if (category._id == myid) {
      category = req.body;
      category._id= db.length;
      db[myid]= category;
      res.status(200).json({ db });
    }
  });
});
app.delete('/api/v1/categories/:id', (req, res)=>{
  const myid= req.params.id;
  db.forEach(category=>{
    if(category._id==myid){
      const index= db.indexOf(category);
      db.splice(index, 1);
      res.status(200).json(db);
    }
  });
});

app.use('*', err404);
app.use(err500);

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT;
    app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
  },
};
