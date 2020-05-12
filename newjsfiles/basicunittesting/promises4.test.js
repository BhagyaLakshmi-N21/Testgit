const assert = require('assert')
//const task1= require('./promises4.js')
//const task2 = require('./promises4.js')
const obj = require('./promises4.js')

describe('testing promises' , () => {
    it('testing with diff values' , async function() {
        let res1 = await obj.task1(1 , 3 )
       let res2 = await obj.task2(res1)
         
        assert.equal(res2 , 9)
    })
    
     let res2 
    it('testing with equal values' , async function() {
        let res1 = await obj.task1(3 , 3 )
       let res2 = await obj.task2(res1)        //this test case is throwing error as nums are equal - resolved by adding then and catch stmts 
                                                  //in module file , this is so rejected answer is not returned here 
           assert.equal(res2 , 'nums are equal')
          
    })


     /*   let res1 = await obj.task1(3 , 3 )
       let res2 = await obj.task2(res1)

       try{
        if(typeof res2 == 'number')
        {
        assert.equal(res2 , 24)
        }
    }catch(err){
           assert.equal(err ,'nums are equal')
        } */

       /* return task1(1, 3).then(task2)
                            .then( function(res){
                                  assert.equal(res , 25)} ,
                                 function(err) {
                                 assert.equal(err , 'nums are equal')}
                                 )*/
    
}) 
