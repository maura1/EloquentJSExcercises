/* To get the Nth letter from a string use 'string[N].
The returned value will be a string containing only one character.
The first character has position 0, which causes the last one to be found at position string.length -1.
Write a function countBs that takes a string asits only argument and returns a number
that indictates how many uppercase 'B' characters ther are in the string.
Next, write a function countChar that behaves like countBs, except it takes a second argument
that indicates the character that is to be counted (rather than counting only 'B' characters).
Rewrite countBs to make use of this new function.*/


function countChar(string,char){
    let counted = 0;
    for(let i = 0 ; i< string.length; i++){
        if(string[i]== char){
            counted += 1
        }
    }
    return counted;
}
function countBs(string){
    return countChar(string,'B')
}

console.log(countBs('BBC'))
console.log(countCHar('kakkerlak' ,'k'))