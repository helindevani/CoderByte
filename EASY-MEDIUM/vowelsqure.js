const input = ["abcd", "eikr", "oufj"];

function vowelSquare(arr) {
  let index = [];

  for (let item of arr) {
    let str = item;
    let currIndex = [];
    let n = item.length;
    str = str.toLowerCase();

    for (let i = 0; i < n; i++) {
      let findvowel = str.charAt(i);
      if (/[aeiou]/.test(findvowel)) {
        currIndex.push(i);
      }
    }

    index.push(currIndex);
  }
  let finalres = [];

  for (let i = 0; i < index.length - 1; i++) {
    for (let j = 0; j < index[i].length; j++) {
      if (index[i].length > 1 && index[i + 1].length > 1) {
        for (let k = 0; k < index[i + 1].length; k++) {
          if (index[i][j] === index[i + 1][k]) {
            finalres.push(i);
            finalres.push(index[i][j]);
            return finalres;
          }
        }
      }
    }
  }

  return finalres.join("");
}


console.log(vowelSquare(input));