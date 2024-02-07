function LargestPair(num) { 
    num = num.toString();
    let largestNum = 0;
    for (let i = 1; i < num.length; i++) {
    let testNum = parseInt(num[i-1] + num[i]);
    if (testNum > largestNum) {
    largestNum = testNum;
    }
    }
    return largestNum;
}
console.log(LargestPair("453857"));   