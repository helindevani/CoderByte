/*
Input: [1, 1, 1, -5]
Output: -2
Input: [0, 0, 2, 3, 7, 1]
Output: 13
*/
function largestfour(arr){
    let newarr=arr.sort((a,b)=>(b-a)).splice(0,4);
    return newarr.reduce((a,b)=>(a+b),0);
}
console.log(largestfour([1, 1, 1, -5]));