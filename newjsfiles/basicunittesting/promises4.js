// finding maximum num

let task1 = function(a , b){
    return new Promise((resolve , reject) => {
        if(a > b)
        {
          resolve(a)
        }
        else if(a < b){
            resolve(b)
        }
        else
        {reject('nums are equal')}
    })
}

//console.log(task1(1,3))

let task2 = function(c){
    return new Promise((resolve , reject) => {
        if(typeof c == 'number')
        {
            resolve(c*c)
        }
        else{
            reject(c)
        }
    })
}

module.exports = {task1 , task2}
//module.exports = task2

 /* task1(1 , 3)
           .then(task2)
           .then(res => {
               console.log(res);
           })
           .catch(err => {
               console.log(err);
           }) */