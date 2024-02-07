function NextPalindrome(num) {
    let count = num + 1;
    while (true) {
    numString = count.toString();
    revString = numString.split('')
    .reverse()
    .join('');
    if (revString === numString) return parseInt(numString, 10);
    count++;
    }
   }
console.log(NextPalindrome(180));   