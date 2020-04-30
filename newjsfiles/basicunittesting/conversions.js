
 
 function convert(celcius) {
    if(!Number.isInteger(celcius)) return undefined;
    else
    return celcius*9/5 + 32;
}

module.exports = convert;