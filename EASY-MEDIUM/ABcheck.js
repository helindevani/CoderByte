/*
Input: "after badly"
Output: false
Input: "Laura sobs"
Output: true

ahiya a pachi 3 place pachi jo b aavto hoy to j true return karvanu
*/

function abcheck(str) {
  pat = /(a...b|b...a)/;
  return pat.test(str);
}
console.log(abcheck("after badly"));
