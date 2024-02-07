function additivepersistence(num){
    var sum,loop=0;
    var val1=num.toString(10).split("").map((t)=>(parseInt(t)));

    while(val1.length>1){
        sum=0;
        val1.forEach((number)=>(sum=sum+number));
        val1=sum.toString(10).split("").map((t)=>(parseInt(t)));
        loop++;
    }
    return loop;
}
console.log(additivepersistence(2178));