/*
Input: "56"
Output: 0
Input: "9876541110"
Output: 6
*/
function onedecrement(num){
    let counter=0;
    let arr=num.toString().split('');
    arr.forEach((val,ind)=>{
        if(parseInt(val,10)-parseInt(arr[ind+1],10)===1){
            counter++;
        }
    });
    return counter;
}
console.log(onedecrement("98765411110"));