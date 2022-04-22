/*We can use the modular(%)to check if a number is even or not,
in this excercise use another way:
Zero is even 
One is odd
for any other number N, ites eveness is the same as N-2
  
Define a recursive function, isEven corespondig to this description
The function should accept a single parameter(a positive, whole number)
and return a boolean.
Test it aon 50,75 and -1*/

let isEven = function (n) {
    //get the absolute value of the number so we are not concerned with negatives
    n = Math.abs(n);

    //If we continue to subtract 2 from the number and it reaches 0, it was an even number
    if (n === 0) return true;
    //If we continue to subtract 2 from the number and it reaches 0, it was an even number
    if (n === 1) return false;
    //If the number is not 0 or 1 we have to continue to subtract 2 from the number
    return isEven(n - 2);
};
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//Alternative
function isEven(num) {
    return num > 1 ? isEven(num - 2) : num >= 0 ? !num : isEven(-num);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));


//if the number is greater than 1, keep subtracting 2 from the number