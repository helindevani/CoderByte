function PowersofTwo(num) { 
    if (num < 2){
    ans = "false"; 
    }
    
    else {
    while (num >= 2){
    var test = num%2;
    if (test == 0){
    num = num/2
    ans = "true";}
    else{
    num = 0;
    ans = "false"}
    } 
    }
    // code goes here 
    return ans; 
    
   }
   console.log(PowersofTwo(128));
   