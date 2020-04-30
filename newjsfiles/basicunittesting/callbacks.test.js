const rem = require('./callbacks');
const assert = require('assert');

describe('testing callbacks using mocha', () => {
     it('should give remainder', (done) => {
          rem(50,4,(res) => {
             assert.equal(2,res);
         });
         done();
        
     });
});