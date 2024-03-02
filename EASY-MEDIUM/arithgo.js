/*


Input: [5,10,15]
Output: Arithmetic
Input: [2,4,16,24]
Output: -1


*/
function ArithGeo(arr) { 
    var len = arr.length;
    var arithK = arr[1] - arr[0];
    var geoK = arr[1] / arr[0];
     
     for (var i = 0; i < len - 1; i++) {
     if (arr[i+1] - arr [i] !== arithK) {
     break; 
     }
     else if (i === len - 2) {
     return "Arithmetic";
     }
     }
     
     for (var i = 0; i < len - 1; i++) {
     if (arr[i+1] / arr [i] !== geoK) {
     break; 
     }
     else if (i === len - 2) {
     return "Geometric";
     }
     }
     
     return -1; 
    }
console.log(ArithGeo([5,10,15]));
