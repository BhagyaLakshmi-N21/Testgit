const square = require('./index');
const assert = require('assert');
const log = require('./index');


  it('should display on console', function(log) {
log();
});

it('should square a num', function(){

    assert(9, square(3));
         
});