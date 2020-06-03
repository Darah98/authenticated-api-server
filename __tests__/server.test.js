'use strict';
const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockServer = supergoose(server);

describe('Server API', () => {
  it('can post new record', () => {
    const obj = {
      name: 'pain_killer',
      display_name: 'ibuprofen',
      description: 'treats pain & fever',
    };
    return mockServer
      .post('/api/v1/categories')
      .send(obj)
      .then((result) => {
        const record = result.body;
        return Object.keys(obj).forEach((key) => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
  it('can get records', () => {
    const obj = {
      name: 'pain_killer',
      display_name: 'doloraz',
      description: 'treats pain & fever',
    };
    return mockServer
      .post('/api/v1/categories')
      .send(obj)
      .then((data) => {
        return mockServer.get('/api/v1/categories').then((result) => {
          Object.keys(obj).forEach((key) => {
            expect(result.body[1][key]).toEqual(obj[key]);
          });
        });
      });
  });
  // it('can update records', () => {
  //   const obj = {
  //     name: 'pain_killer',
  //     display_name: 'updateddoloraz',
  //     description: 'treats pain & fever',
  //   };
  //   return mockServer
  //     .post('/api/v1/categories')
  //     .send(obj)
  //     .then((data) => {
  //       const id= data.body._id;
  //       return mockServer
  //         .put('/api/v1/categories/:id')
  //         .send(obj, id)
  //         .then((result) => {
  //           expect(result.body).toEqual(obj);
  //         });
  //     });
  // });
  it('can delete records', () => {
    const obj = {
      name: 'pain_killer',
      display_name: 'deletedoloraz',
      description: 'treats pain & fever',
    };
    return mockServer
      .post('/api/v1/categories')
      .send(obj)
      .then((data) => {
        const id= data.body._id;
        return mockServer
          .delete('/api/v1/categories/:id')
          .send(id)
          .then((result) => {
            expect(result.text).toEqual('Deleted.');
          });
      });
  });
});
