/*
Input: "never odd or even"
Output: true
Input: "eye"
Output: true
*/

function palingdrome(str){
 modified = str.replace(/W/g,"");
 console.log(modified);
 var arr1 = modified.split("");
 var arr2 = arr1;
 arr2 = arr2.reverse();
 str2 = arr2.join("");
 
 return modified == str2;

}
console.log(palingdrome("eye"));