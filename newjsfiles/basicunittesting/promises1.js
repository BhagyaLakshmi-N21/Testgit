let key;
//const Q = require('q')

function operation(key) {

      return new Promise((resolve , reject) => {

       // var deferred = Q.defer();

         // setTimeout(function() {

              if(typeof(key) == 'number')
              resolve(key*2);
              else
              reject('expected num values');
            })//,1000)
              .then((result) => {
               //console.log(result);
              return result;
               })
            .catch((err) => {
            //console.log(err);
                return err ;
              });
          
                 
        //});
}

 /*operation('ball')
  .then((result) => {
   console.log(result);
  // return result;
   })
.catch((err) => {
console.log(err);
    //return err ;
  });*/
 
  
  //promise {<pending>}
 // console.log(result1);
module.exports = operation;
              
              