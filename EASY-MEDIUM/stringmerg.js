/*
Input: "aaa*bbb"
Output: ababab
Input: "123hg*aaabb"
Output: 1a2a3ahbgb
*/
function StringMerge(str) { 
    const cleanString = str.replace(/[^\w*]/g, '');
    const len = (cleanString.length - 1) / 2;
    let newString = '';
    const arr = str.split('*');
    for (let i = 0; i < len; i++) {
        newString += arr[0][i] + arr[1][i];
    }
    return newString;
}
console.log(StringMerge("aaa*bbb"));