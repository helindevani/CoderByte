/*
Input: "cats AND*Dogs-are Awesome"
Output: catsAndDogsAreAwesome
Input: "a b c d-e-f%g"
Output: aBCDEFG
*/
function camelcase(str){
    let strarr= str.split(/[^a-zA-Z]/);
    strarr=strarr.map((val,ind)=>{
        val=val.toLowerCase();
    if(ind){
        valarr=val.split('');
        valarr[0]=valarr[0].toUpperCase();
        return valarr.join('');
    }
    return val;
})
    return strarr.join('');
}
console.log(camelcase("cats AND*Dogs-are Awesome"));