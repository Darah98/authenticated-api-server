'use strict';
const express = require('express');
const morgan = require('morgan');
const cors= require('cors');
const catRouter= require('./routes/categories.js');
const prodRouter= require('./routes/products.js');
const err404 = require('./middleware/404.js');
const err500 = require('./middleware/500.js');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/v1', catRouter);
app.use('/api/v1', prodRouter);


app.use('*', err404);
app.use(err500);

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || 3000;
    app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
  },
};
