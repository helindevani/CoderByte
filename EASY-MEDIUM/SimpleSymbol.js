/*
Input: "+d+=3=+s+"
Output: true
Input: "f++d+"
Output: false
*/
function SimpleSymbols(str) {
  if (/^[a-zA-Z]/.test(str) || /[a-zA-Z]$/.test(str)) {
    return false;
  } else if (/[^+][a-zA-Z]/.test(str) || /[a-zA-Z][^+]/.test(str)) {
    return false;
  } else {
    return true;
  }
}
