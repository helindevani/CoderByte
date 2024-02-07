/*
Input: "hello world"
Output: 104101108108111 119111114108100
Input: "abc **"
Output: 979899 4242
*/
function asciiconversion(str){
    return str.split(' ').map((a)=>(a.split('').map((b)=>(b.charCodeAt(0))).join(''))).join('');
}
console.log(asciiconversion("hello world"));