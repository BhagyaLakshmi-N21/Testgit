let a;
let b;

let div = function(a , b){
    return new Promise((resolve) => {
        resolve( a/b );
    })
    
}

module.exports = div

//let c=div(50,0);

//console.log(c);
