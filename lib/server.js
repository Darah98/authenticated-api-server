'use strict';
require('dotenv').config();
const express = require('express');
const logReq = require('./middleware/logger.js');
const err404 = require('./middleware/404');
const err500 = require('./middleware/500.js');
const app = express();

app.use(express.json());
app.use(logReq);
// app.use(err404);
// app.use(err500);

let db = [];

// app.get('/', (req, res)=>{
//   res.status(200).json(db);
// });
app.post('/api/v1/products', (req, res) => {
  const {category, name, display_name, description}= req.body;
  console.log('name', name);
  const product= {category, name, display_name, description};
  product._id= db.length +1;
  db.push(product); 
  res.status(200).json(product);
});
app.get('/api/v1/products', (req, res)=>{
  const count= db.length;
  const results= db;
  res.status(200).json({count, results});
});
app.get('api/v1/products/:_id', (req,res)=>{
  console.log(req.params);
  const id= req.params._id;
  db.forEach(product=>{
    if(product._id===id){
      res.status(200).json(product);
    }
  });
});
module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT;
    app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
  },
};
