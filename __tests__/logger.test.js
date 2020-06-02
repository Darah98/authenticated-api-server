'use strict';
const loggerMW = require('../lib/middleware/logger.js');
describe('Logger Middleware', () => {
  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('Logs out the request information', () => {
    loggerMW(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('Moves properly to the next middleware', () => {
    loggerMW(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});
