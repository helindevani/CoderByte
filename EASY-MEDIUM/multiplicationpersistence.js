function multiplicationpersistence(num){
    var sum,loop=0;
    var val1=num.toString(10).split("");

    while(val1.length>1){
        sum=1;
        val1.forEach((number)=>(sum=sum*number));
        val1=sum.toString(10).split("");
        loop++;
    }
    return loop;
}
console.log(multiplicationpersistence(39));