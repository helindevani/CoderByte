
/*
Input: [2, 2, 2, 2, 4, 1]
Output: false
Input: [1, 1, 2, 10, 3, 1, 12]
Output: true
*/

function SumMultiplier(arr) { 
    const target = arr.reduce((val1, val2) => val1 + val2, 0) * 2;
    arr.sort((num1, num2) => num1 - num2);
    const len = arr.length;
    const checker = Math.max((arr[0] * arr[1]), (arr[len - 2] * arr[len - 1]));
    return checker > target;
}
console.log(SumMultiplier([2, 2, 2, 2, 4, 1]));