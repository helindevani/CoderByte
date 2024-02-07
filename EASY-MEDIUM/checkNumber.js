/*
Input: 3 & num2 = 122
Output: true
Input: 67 & num2 = 67
Output: -1
*/

function checknumber(num1, num2) {
  if (num1 == num2) {
    return false;
  } else {
    return num2 > num1;
  }
}
console.log(checknumber(6, 25));
