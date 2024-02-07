/*
Input: [1, 0, 0, 0, 2, 2, 2]
Output: 4
Input: [2, 0, 0, 0, 2, 2, 1, 0]
Output: 1
*/

function closetenemy1(strarr){
    if(!strarr.includes(2)){
        return 0;
    }
    loc1=strarr.findIndex((val)=>(val==1));
   
    for(let i=0;i<strarr.length;i++){
        if(strarr[loc1+i]===2||strarr[loc1-i]===2){
            return i;
        }
    }
    return 0;
}
console.log(closetenemy1([1, 0, 0, 0, 2, 2, 2]));