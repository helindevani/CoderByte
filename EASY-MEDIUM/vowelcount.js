/*
Input: "hello"
Output: 2
Input: "coderbyte"
Output: 3
*/

function vowelcount(str) {
  pat = /[aeiou]/gi;
  var arr = str.match(pat);
  if (arr == null) {
    return 0;
  } else {
    return arr.length;
  }
}

console.log(vowelcount("hello"));
