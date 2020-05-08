const assert = require('assert');

const operation = require('./promises');

describe('unit testing promises' , () => {
    
    it('show result' ,  async  function() {

        let res = await operation(5);
          if(typeof res == 'number')
          {
          assert.equal(res , 11)
          }
          else{
             assert.equal(res ,'expected num values')
          } 
       
        
      /*  return operation('bat').then( res => {
                                assert.equal(10 , res)
                                 })
                               .catch(res => {
                                 assert.equal('expected num values' , res)
                                 });  */


       /*  return new Promise( (resolve , reject) => {
            let res =  operation(5);
            
            if(res.state === 'fulfilled'){
                 resolve(res);
            }
            else{
               reject(res);
            }
           }).then(res => {
                let pvalue
                //console.log(res)
                   if(res.state === 'fulfilled'){
                       pvalue = res.value
                    }
                  assert.equal(11 , pvalue );
                  
                      })
                  .catch(res => {
                      let err
                    if(res.state === 'rejected'){
                         err = res.reason
                       }
                    assert.equal('expected num values' , err)
                     //console.log(res);
                       });  */
                                     
     });
});