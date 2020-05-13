function div(a , b){
    return (a/b);
}

function divcallback(a ,b , callback){
    setTimeout(() => {
        return callback( a/b);
    },500)
}

//console.log(div(12,4))

module.exports = {div , divcallback}