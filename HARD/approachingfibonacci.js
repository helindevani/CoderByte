function approachingfibonacci(arr){
    var total=arr.reduce((n1,n2)=>(n1+n2),0);

    var sl=0;
    var l=0, sum=0;
    for(var i=1;i<=total;i++){
        if(i==1){
            l=1;
        }
        else{
            var sum= l+sl;
            sl=l;
            l=sum;
        }
        if(l==total)return 0;
        if(l > total) return l-total;
    }
}
console.log(approachingfibonacci([15,1,3]));