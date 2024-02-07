function PalindromeCreator(str) {
    let len = str.length;
    //test to see if it is a Palindrome already
    if (isPalindrome(str)) {
        return 'palindrome';
    }
    for (let i = 0; i < len; i++) {
        let testArray = str.split('');
        let res = testArray.splice(i, 1);
        let newString = testArray.join('');
        if (isPalindrome(newString)) {
            return res.join('');
        }
    }
    for (let i = 0; i < len; i++) {
        let res = [];
        for (let j = i; j < len - 1; j++) {
            let testArray = str.split('');
            res[0] = testArray.splice(i, 1);
            res[1] = testArray.splice(j, 1);
            let newString = testArray.join('');
            if(isPalindrome(newString)) {
                return res.join('');
            }
        }
    }
    return 'not possible';
}
  
function isPalindrome(str) {
    let newStr = str.split('').reverse().join('');
    if (newStr === str) {
        return true;
    }
    return false;
}
console.log(PalindromeCreator("kjjjhjjj"))