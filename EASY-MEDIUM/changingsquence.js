function changingsquence(arr){
    let index=null;
    let map=(arr[1]-arr[0]>0)?true:false;
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i-1] > 0 !== map) {
            index = i-1;
            break;
        }
    }
    return (index === null) ? -1 : index;
}
console.log(changingsquence([5, 4, 3, 2, 10, 11]));