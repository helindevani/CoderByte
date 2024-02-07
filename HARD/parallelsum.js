function ParallelSum(arr) {
    const sum = calcSum(arr);

    if (sum % 2 !== 0) return -1;
    const first = [];
    const sec = [];

    arr.sort((a, b) => b - a);

    var FSum = arr[0];
    var SSum = arr[1];


    first.push(arr[0]);
    sec.push(arr[1]);

    for (let i = 2; i < arr.length; i++) {
        const FcurrSum = FSum + arr[i];
        const ScurrSum = SSum + arr[i];
        if (FcurrSum > ScurrSum) {
            sec.push(arr[i]);
            SSum += arr[i];
        } else {
            first.push(arr[i]);
            FSum += arr[i];
        }
    }
    if (calcSum(first) !== calcSum(sec)&& first.length !== sec.length) {

        return -1;
    }
    first.reverse();
    sec.reverse();
    return first[0] < sec[0] ? first.concat(sec).join(',') : sec.concat(first).join(',');
}

function calcSum(arr) {
    return arr.reduce((acc, cur) => acc += cur, 0)
}

console.log(ParallelSum([2, 3, 1]));