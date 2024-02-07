function ThreeSum(arr) {
    let target = arr.shift();
    let len = arr.length;
    for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
    for (let k = i + 2; k < len; k++) {
    if (arr[i] + arr[j] + arr[k] === target) {
    return "true";
    }
    }
    }
    }
    return "false"
    }
console.log(ThreeSum([12, 3, 1, -5, -4, 7]));    