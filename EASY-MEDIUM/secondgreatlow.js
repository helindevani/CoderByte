function secondgreatlow(arr){
    arr=arr.slice().sort((a,b)=>(a-b));
    let secondlow=arr[1];
    for(let i=1;i<arr.length;i++){
        if(arr[i]!==arr[0]){
            secondlow=arr[i];
            break;
        }
    }
    let secondgreat=arr[arr.length-2];
    for(let i=arr.length-2;i>=0;i--){
        if(arr[i]!==arr[arr.length-1]){
            secondgreat=arr[i];
            break;
        }
    }
    return secondlow+ " " +secondgreat;
}
console.log(secondgreatlow([1,42,45,42,75]));