function basicromannumber(str){
    let len=str.length;
    let letobj={
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let res=0;
    for(let i=0;i<len;i++){
        if(!letobj[str[i+1]]|| letobj[str[i]]>=letobj[str[i+1]]){
            res+=letobj[str[i]];
        }
        else{
            res += (letobj[str[i + 1]] - letobj[str[i]]);
            i++;
        }
    }
    return res;
}
console.log(basicromannumber("IV"));