const add = require('./promises2.js');

const assert = require('assert')

describe('testing promises' , function()  {
    it('testing add function' , function() {
           return add(2 , 3).then(res => {
               assert.equal(res , 5);
           })

    })
})