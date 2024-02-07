function romannumberreduction(str){
    const Roman_numbers={
        M:1000,
        D:500,
        C:100,
        L:50,
        X:10,
        V:5,
        I:1
    };
    let sum=0;
    
    str.split("").forEach(element => {
        sum+=Roman_numbers[element];
    });

    let output='';

    Object.entries(Roman_numbers).forEach(value=>{
        let num=Math.floor(sum/value[1]);

        sum -= num * value[1];
        output += value[0].repeat(num);
    });
    return output;
}
console.log(romannumberreduction("LLLLLLCCCCCC"));