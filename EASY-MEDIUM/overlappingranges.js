function overlapingranges(arr){
    var target=arr.pop();
    var maxLowerbound=Math.max(arr[0],arr[2]);
    var minUpperbound=Math.min(arr[1],arr[3]);
    var range=minUpperbound-maxLowerbound+1;
    return range>=target? 'true' : 'false';
}
console.log(overlapingranges([5,11,1,5,1]));