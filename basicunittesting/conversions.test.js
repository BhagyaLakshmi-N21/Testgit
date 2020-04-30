const convert = require('./conversions');
const assert = require('assert');

describe('CtoF conversions', function(){
    it('should convert -40C to -40F', function(){
                 assert.equal(-40, convert(-40));
    });

    it('should convert 0C to 32F', function(){
           assert.equal(32,convert(0));
    });

    it('should return undefined for no input', function(){
          assert.equal(undefined,convert());
    });
});