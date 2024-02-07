/*
Input: [5, 7, 16, 1, 2]
Output: 7
Input: [1, 1, 1, 2]
Output: 1
*/
function elementmerger(arr){
    if(arr.length===1){
        return arr[0];
    }
    else{
        newarr=[];
        arr.forEach((val,ind)=>{
            if(ind<arr.length-1){
                newarr.push(Math.abs(val-arr[ind+1]));
            }
        })
        return elementmerger(newarr);
    }
}
console.log(elementmerger([5,7,16,1,2]));