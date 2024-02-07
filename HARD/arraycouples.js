function arracouple(arr){
    const unmatchedpairs=[];
    for(let i=0;i<arr.length;i+=2){
        let left=arr[i];
        let right=arr[i+1];
        if(!pairinarray(arr,[right,left],i)){
            unmatchedpairs.push([left,right]);
        }
    }
    return unmatchedpairs.length===0?'yes':unmatchedpairs.join(',');
}
function pairinarray(arr, pair,index){
    let [left,right]=pair;
    for(let i=0;i<arr.length;i+=2){
        if(index!==i&&arr[i]===left&&arr[i+1]===right){
            return true;
        }
    }
    return false;
}
console.log(arracouple([4, 5, 1, 4, 5, 4, 4, 1]));