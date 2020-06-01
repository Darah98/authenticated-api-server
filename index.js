'use strict';
require('dotenv').config();
const server = require('./lib/server.js');
server.start();
// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('./data/db.json');
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(router);
// server.listen(3000, () => {
//   console.log('JSON server is alive');
// });

// router.render = (req, res) => {
//   res.jsonp({
//     count: res.locals.data.length,
//     results: [res.locals.data],
//   });
//   console.log(res.locals.data);
// };
