/*
Input: "5556293383563665"
Output: false
Input: "5788888888882339999"
Output: true
*/
function numberstream(str){
    for(let i=2;i<10;i++){
        let ichar=i.toString();
        let needle=ichar.repeat(i);
        if(str.indexOf(needle)!== -1){
            return true;
        }
    }
    return false;
}
console.log(numberstream("5788888888882339999"));