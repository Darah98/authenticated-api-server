'use strict';

const bearer = require('../auth/middleware/bearer.js');
describe('bearer', () => {
  it('moves to next() with an error on invalid authorization headers', () => {
    const req ={
      headers:{
            
      },
    };
    const res = {};
    const next = jest.fn();
    bearer(req, res, next);
    expect(next).toHaveBeenCalledWith('Invalid header info');
  });
});