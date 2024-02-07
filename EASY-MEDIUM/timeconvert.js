/* 
Input: 126
Output: 2:6
Input: 45
Output: 0:4
*/

function timeconvert(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  var str = hours + ":" + minutes;
  return str;
}
console.log(timeconvert(126));
