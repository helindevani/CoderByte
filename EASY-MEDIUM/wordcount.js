/*
Input: "Hello World"
Output: 2
Input: "one 22 three"
Output: 3
*/

function wordcount(str) {
  var arr = str.split(" ");
  return arr.length;
}
console.log(wordcount("hello is world"));
