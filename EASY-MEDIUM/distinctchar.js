/*
Input: "12334bbmma:=6"
Output: true
Input: "eeeemmmmmmmmm1000"
Output: false
*/
function distinctchar(str){
    let ans=new Set(str.split(''));
    return ans.size>=10?true:false;
}
console.log(distinctchar("12334bbmma:=6"))