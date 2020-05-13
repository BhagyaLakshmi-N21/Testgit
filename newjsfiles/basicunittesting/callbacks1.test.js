const mod = require('./callbacks1.js')
const assert = require('assert')

describe('testing call backs' , () => {
      it('testing add' , function(done)  {
        assert.equal( mod.operations(2,3,mod.add) , 5)                     //getting an assertion err undefined == 5
        done()
    })
        
   /*it('testing sub' , function(done)  {
        let res =   mod.operations(2 , 3 , mod.sub)       ,
        assert.equal(res , -1)
        done()
    })

    it('testing mul' , function(done)  {
        let res = mod.operations(2 , 3 , mod.mul)
        assert.equal(res , 6)
        done()
    })*/
})