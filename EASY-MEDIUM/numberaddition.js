function numberaddition(str){
    var tot=0;
    var arr=str.replace(/[^0-9\.]+/g," ").split(' ');
    for (var i = 0; i < arr.length; i++) {
        tot += Number(arr[i]);
    }
  
  return tot;
}
console.log(numberaddition("75Number9"));
