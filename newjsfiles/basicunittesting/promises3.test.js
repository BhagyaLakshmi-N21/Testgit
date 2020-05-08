const assert = require('assert')

const sub = require('./promises3.js')

describe('testing promises' , function() {
    it('testing sub method' , async function() {
        let res = await sub(10 , 8)
        assert.equal(res ,3)
     })
})