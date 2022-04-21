//given two numbers, return the minimum number


const min = (a, b) => Math.min(a, b);
console.log(min(3, 4));


//alternative
function min(a,b) {
    if (a<b){
        return a;
    }else{
        return b;
    }
}


