const assert = require('assert')
const task1= require('./promises4.js')
const task2 = require('./promises4.js')

describe('testing promises' , () => {
    it('testing task1 and task2' , async function() {

        let res1 = await task1(1 , 3 )
        let res2 = await task2(res1)

        if(typeof res2 == 'number')
        {
        assert.equal(res2 , 9)
        }
        else{
           assert.equal(res2 ,'nums are equal')
        } 
       /* return task1(1, 3).then(task2)
                            .then( function(res){
                                  assert.equal(res , 25)} ,
                                 function(err) {
                                 assert.equal(err , 'nums are equal')}
                                 )*/
    })


}) 
