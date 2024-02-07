function pascall(arr) {

    const n = arr[1];
    const r = arr.length;
  
    const res = factorial(n) / (factorial(n - r) * factorial(r));
    console.log(res);
  }
  
  function factorial(n){
    let ans=1;
    for(let i=1;i<=n;i++){
        ans *= i;
    }
    return ans;
}
  pascall([1, 17, 136, 680, 2380,6188,12376,19448,24310,24310]);