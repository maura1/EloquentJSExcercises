for (let n = 1; n <= 100; n++) {
    let output = '';
    if (n % 3 === 0 && n % 5 === 0) output = 'FizzBuzz';
    else if (n % 3 === 0) output += 'Fizz';
    else if (n % 5 === 0) output += 'Buzz';
    console.log(output || n);
}
//alternative
function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return NaN;
    } else if (input % 3 === 0 && input % 5 === 0) {
        return 'FizzBuzz';
    } else if (input % 3 === 0) {
        return 'Fizz';
    } else if (input % 5 === 0) {
        return 'Buzz';
    }
    return input;
}
console.log(10);
