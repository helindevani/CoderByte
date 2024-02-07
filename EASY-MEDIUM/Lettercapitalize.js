/*
Input: "hello world"
Output: Hello World
Input: "i ran there"
Output: I Ran There
*/

function lettercapitalize(str) {
  arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  str = arr.join(" ");

  return str;
}

console.log(lettercapitalize("hello world"));
