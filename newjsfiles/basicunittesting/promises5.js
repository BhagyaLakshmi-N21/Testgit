let arr = [ 12 , 50 , 78 , 99 , 26 , 45 ,59];

let check = function(key){
    return new Promise((resolve , reject) => {
        if(key >= 50)
        {
            resolve('Accepted')
        }
        else
        {
            reject('Rejected')
        }
    }).then((result) => {
        return result;
        })
     .catch((err) => {
      return err ;
       });
}


arr.forEach((i) => {
   let res =  check(i).then(res => {
                       console.log(res)
                       })
                     .catch(res => {
                         console.log(res)
                     })
   
})

module.exports = check