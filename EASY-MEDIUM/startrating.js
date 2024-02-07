function starrating(str){
    let num=(Math.round(parseFloat(str)*2))/2;
    let starstring ="";
    let half=!(Math.trunc(num)===num);
    starstring=starstring + "full".repeat(num);
    if(half){
        starstring+="half";
    }
    return (starstring + "empty".repeat(5-num)).trim();
}
console.log(starrating(0.38));
console.log(starrating(4.5));