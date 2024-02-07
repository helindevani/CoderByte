function matchingcouples(arr){
    const [boys,girls,pair]=arr;

    const numbereachgender= pair/2;

    boyscomb=choose(boys,numbereachgender);
    girlscomb=choose(girls,numbereachgender);
    totalcomb=boyscomb*girlscomb*factorial(numbereachgender);
    return totalcomb;
}
function factorial(n){
    let ans=1;
    for(let i=1;i<=n;i++){
        ans *= i;
    }
    return ans;
}
function choose(n,r){
    return factorial(n)/(factorial(r)*factorial(n-r));
}

console.log(matchingcouples([5,3,2]));
