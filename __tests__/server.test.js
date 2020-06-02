'use strict';
const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockServer = supertest(server);

describe('Server', () => {
  it('Should respond with 404 if route is invalid', () => {
    return mockServer.get('/api/v1/invalidroute').then((result) => {
      expect(result.status).toBe(404);
    });
  });
  it('Should respond with 404 if method is invalid', () => {
    return mockServer.patch('/api/v1/products/1').then((result) => {
      expect(result.status).toBe(404);
    });
  });
  it('Should respond with 200 if method and route are cvalid', () => {
    return mockServer.get('/api/v1/products').then((result) => {
      expect(result.status).toBe(200);
    });
  });
});
