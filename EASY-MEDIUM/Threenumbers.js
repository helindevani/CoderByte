/*
Input: "2a3b5 w1o2rl3d g1gg92"
Output: true
Input: "21aa3a ggg4g4g6ggg"
Output: false
*/
function threenumbers(str){
    let array=str.split(" ");
    for(let i=0;i<array.length;i++){
        if(/[0-9]{3,}/.exec(array[i]) !== null){
            return false;
        }
        else{
            let n=array[i].match(/[0-9]/g);
            if(n[0]===n[1]||n[1]===n[2]||n[0]===n[2]){
                return false;
            }

        }
    }
    return true;
}
console.log(threenumbers("2a3b5 w1o2rl3d g1gg92"));