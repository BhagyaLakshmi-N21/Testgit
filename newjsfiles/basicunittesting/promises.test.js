const assert = require('assert');

const greetings = require('./promises');

describe('unit testing promises' , () => {
    
    it('show greetings' , () => {

    greetings(5).then(result => {

        assert(11 , result );
        
            })
        .catch(err => {
            assert('expected string values' , err );
            
        });
       
    });
});