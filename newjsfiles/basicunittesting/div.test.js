const div = require('./div.js')
const assert = require('assert')

describe('testing div(a,b)' ,  function(){
    it/*.only*/('should give 0 if a = 0' , async function() {     // exclusive test
         let res = await div(0 ,5)
        assert.equal(res , 0);
    })

    it/*.skip*/('should give Infinity if b = 0' , async function() {   //inclusive test
        let res = await div(50 ,0)
        assert.equal(res , Infinity);
    })

    it('should give value ' ,async function() {
        let res = await div(50 ,5)
        assert.equal(res , 10);
    })


})
