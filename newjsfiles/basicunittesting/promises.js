let key;

function greetings(key) {

      return new Promise((resolve , reject) => {

          setTimeout(() => {

              if(typeof(key) == 'number')
              resolve(key*2);
              else
              reject('expected num values');}
          ,1000).then((result) => {
                    return result;
                    })
                 .catch((err) => {
                     return err ;
                   });
                 
        });
}


module.exports = greetings;
              
              