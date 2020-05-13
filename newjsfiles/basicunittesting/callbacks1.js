let add = function(a , b)
{
    return a + b 
}

let sub = function(a , b)
{
    return a-b 
}

let mul = function(a ,b)
{
    return a*b 
}

function operations(a , b , callback){
    setTimeout(() => {
    return callback(a, b)
   } , 1000)
    
}
//console.log('done')

//console.log(operations(4 ,5 , mul))
//console.log(operations)

module.exports = {add , sub , mul , operations}