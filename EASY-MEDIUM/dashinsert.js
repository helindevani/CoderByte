function DashInsert(num) { 
    var strnum = num.toString();
    var arr = strnum.split("");
     for (i = 0; i < arr.length; i++) {
     arr[i] = parseInt(arr[i]);
     }
     
     for (i = 0; i < arr.length - 1; i++) {
     if (arr[i]%2 == 1 && arr[i + 1]%2 == 1) {
     arr.splice(i+1, 0, "-"); 
     }
     }
     x = arr.join("");
     
     return x; 
     
    }
    console.log(DashInsert(956876));