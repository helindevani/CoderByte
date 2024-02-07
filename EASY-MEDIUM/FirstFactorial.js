/*
Input: 4
Output: 24
Input: 8
Output: 40320
*/

function Firstfact(num) {
  let factorial = 1;
  for (i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(Firstfact(8));
