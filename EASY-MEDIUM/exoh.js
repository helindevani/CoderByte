/*
Input: "xooxxo"
Output: true
Input: "x"
Output: false
*/
function exoh(str) {
  let xlenth = 0;
  let olenth = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      xlenth++;
    }
    if (str[i] === "o") {
      olenth++;
    }
  }
  if (xlenth === olenth) {
    return true;
  }

  return false;
}
console.log(exoh("xooxx"));
