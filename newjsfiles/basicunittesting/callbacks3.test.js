const obj = require('./callbacks3')
const assert = require('assert')

describe('testing div',() => {
    it('testing without callbacks' , () =>{
       
        assert.equal(obj.div(12,3) , 4)
     })

     it('testing with callbacks' , (done) =>{
         obj.divcallback(15,3,(res) =>{
            assert.equal( res, 5)
            done();

         })
       
        
     })
})