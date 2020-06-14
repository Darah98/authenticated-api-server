'use strict';
require('@code-fellows/supergoose');
const model = require('../lib/models/categories/categories-collection.js');
const obj = {
  name: 'supplements',
  display_name: 'zinc_sulphate',
  description: 'Growth supplements',
};
describe('Model', () => {
  it('creates records', () => {
    return model.create(obj).then((result) => {
      Object.keys(obj).forEach((key) => {
        expect(result[key]).toEqual(obj[key]);
      });
    });
  });
  // it('reads records', () => {
  //   return model.read(obj).then((result) => {
  //     Object.keys(obj).forEach((key) => {
  //       expect(result[0][key]).toEqual(obj[key]);
  //     });
  //   });
  // });
  
});
