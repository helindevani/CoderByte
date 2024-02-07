function letercount1(str){
  var arr=str.toLowerCase().split(" ");
  var length=arr.length;
  var newarr=[];
  var counter=1;
  var maxcount=0;

  for(let i=0;i<length;i++){
    woarr=arr[i].split('');
    woarr.sort();

    for(var j=0; j<woarr.length;j++){
      if(woarr[j]==woarr[j+1]){
        counter++;
      }
      else{
        if(counter>maxcount){
          maxcount=counter;
          counter=1;
        }
      }
    }
    newarr.push([arr[i],maxcount]);
    maxcount=0;
  }
  newarr.sort((a,b)=>(b[1]-a[1]));
  if(newarr[0][1]==1){
    return -1;
  }
  else{
    return newarr[0][0];
  }
}
console.log(letercount1("hello how are you"));