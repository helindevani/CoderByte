function TwoSum(arr) {
    let target = arr.shift();
    let len = arr.length;
    let holdArr = [];
    for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
    if (arr[i] + arr[j] === target) {
    holdArr.push(`${arr[i].toString()},${arr[j].toString()}`);
    break;
    }
    }
    }
    return holdArr.length ? holdArr.join(' ') : -1;
   }
console.log(TwoSum([7, 6, 4, 1, 7, -2, 3, 12]));