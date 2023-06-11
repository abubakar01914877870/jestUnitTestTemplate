module.exports.absolute = (number) => {
    if(number > 0) return number;
    if(number < 0) return -number;
    return 0;
};

module.exports.fizzbuzz = (number) => {
    if(number % 3 === 0 && number % 5 === 0) return 'fizzbuzz';
    else if(number % 3 === 0) return 'fizz';
    else if(number % 5 === 0) return 'buzz';
    else return number;
};