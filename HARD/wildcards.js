function wildcards(str){
    var arr= str.split(" ");
    var pattern=arr[0];
    var word=arr[1];

    var regexptn="";

    for(let i=0;i<pattern.length;++i){
        if(pattern[i]==='+') regexptn += '[a-z]';
        if(pattern[i]==='$') regexptn += '[1-9]';
        if(pattern[i]==='*'){
            if(pattern[i+1]==="{"){
                regexptn += '.{' +pattern[i+2] +'}';
            }else{
                regexptn +='.{3}';
            }
        }

    }
    return new RegExp("^"+regexptn+"$").test(word);
}
console.log(wildcards("+++++* abcdehhhhhh"));
console.log(wildcards("$**+*{2} 9mmmrrrkbb"));
console.log(wildcards("++*{5} jtggggg"));

