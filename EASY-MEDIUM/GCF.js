function GCF(arr) {
    let res = null;
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    for (let i = 1; i <= min; i++) {
        if (max % i === 0 && min % i === 0) {
            res = i;
        }
    }
    return res;
}
console.log(GCF([45,12]));