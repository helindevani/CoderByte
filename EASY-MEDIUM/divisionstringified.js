function divitionstringified(num1,num2){
    var ans=Math.round(num1/num2);
    string=ans.toString();
    numlen=string.length;
    var newstring = string;
 
    if (numlen > 3) {
        var arr = string.split("");
        for (var i= numlen - 3; i > 0; i = i - 3) {
            arr.splice(i, 0, ",");
        }
        var newstring = arr.join("");
    } 
    return newstring; 
}
console.log(divitionstringified(2,3));