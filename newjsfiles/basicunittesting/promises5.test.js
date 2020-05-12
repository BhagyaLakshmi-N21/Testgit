const check = require('./promises5')
const assert = require('assert')

describe('testing promises' , () =>{
    describe('testing check functionality' , () => {
        it('Accepted when num >= 50' , async () =>{
            let res = await check(75);
            assert.equal(res , 'Accepted');
        })

        it('Rejected when num < 50' , async () =>{
            let res = await check(7);
            assert.equal(res , 'Rejected');
        })
        
    })
})