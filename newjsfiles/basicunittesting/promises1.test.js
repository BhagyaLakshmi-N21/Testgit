const assert = require('assert');

const operation = require('./promises');

describe('unit testing promises' , () => {
    
    it('show result' , function() {
        
       /* return operation(5).then( res => {
                                assert.equal(11 , res)
                                 })
                               .catch(res => {
                                 assert.equal('expected num values' , res)
                                 });  */


         return new Promise( (resolve , reject) => {
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
                       });  
                                     
     });
});