function countinganagram(str){
    let words=str.split(" ");
    let uniqueword= new Set(words);
    let signatures={};
    uniqueword.forEach(word =>{
        let key=word.split('').sort().join('');
        if(signatures[key]===undefined){
            signatures[key]=1;
        }
        else{
            signatures[key]++;
        }
    });
    let anagram=Object.values(signatures);
    let counter=0;
    for(let i=0;i<anagram.length;i++){
        if(anagram[i]>1){
            counter++;
        }
    }
    return counter;
}
console.log(countinganagram("cars are very srac cool so are arcs and my os"));
console.log(countinganagram("aa aa odg dog gdo"));
console.log(countinganagram("a c b c run urn urn"));
