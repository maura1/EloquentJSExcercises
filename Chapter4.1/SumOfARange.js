/*Write a function that takes two arguments, start an d end, and returns 
an array containing all the numbers from start up to (and including)end.

Write a sum function that takes an array of numbers and returns the sum of these numbers

To check results use: console.log(sum(range(1,20))), result should equal 55
 */
function sumAll(arr) {
    const start = Math.min(arr[0], arr[1]);
    const end = Math.max(arr[0], arr[1]);

    console.log(start, end);
}
sumAll(1, 4);
