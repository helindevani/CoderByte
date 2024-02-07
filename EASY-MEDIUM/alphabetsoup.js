/*
Input: "coderbyte"
Output: bcdeeorty
Input: "hooplah"
Output: ahhloop
*/
function alphasoup(str) {
  var arrays = str.split("");
  var reversearrays = arrays.sort();
  var result = reversearrays.join("");
  return result;
}
console.log(alphasoup("coderbyte"));
