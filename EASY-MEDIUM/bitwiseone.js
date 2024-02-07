function bitwiseone(strArr){
    var output = '';
 for (var i = 0; i < strArr[0].length; i++) {
 if (strArr[0][i] === '1' || strArr[1][i] === '1') {
 output += '1';
 } else {
 output += '0';
 }
 }
 return output;
}
console.log(bitwiseone(['101110','110001']));