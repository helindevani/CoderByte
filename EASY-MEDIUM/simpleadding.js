/*
Input: 12
Output: 78
Input: 140
Output: 9870

*/

function SimpleAdding(num) {
  if (num === 1) {
    return 1;
  } else {
    return num + SimpleAdding(num - 1);
  }
}

console.log(SimpleAdding(12));
