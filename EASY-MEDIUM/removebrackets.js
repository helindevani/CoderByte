function RemoveBrackets(str) {
    let throwouts = 0;
    let counter = 0;
    let arr = str.split('');
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        counter = arr[i] === '(' ? ++counter : --counter;
        if (counter < 0) {
            throwouts++;
            counter = 0;
        }
    }
    throwouts += counter;
    return throwouts;
}
console.log(RemoveBrackets("(())()((("));