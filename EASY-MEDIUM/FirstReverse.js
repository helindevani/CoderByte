/* input: "coderbyte"
  output: etybredoc

  input: "I Love Code"
  output: edoc evoL I */

function firstreverse(str) {
  var arr = str.split("");
  arr.reverse();
  return arr.join("");
}

console.log(firstreverse("I Love Code"));
