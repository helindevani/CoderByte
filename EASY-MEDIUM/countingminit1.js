function countingminit1(str){
    var seps = str.split("-");
    var col1 = seps[0].indexOf(":");
    var col2 = seps[1].indexOf(":");
    var hour1 = parseInt(seps [0].slice(0, col1));
    var hour2 = parseInt(seps[1].slice(0, col2));
    var min1 = parseInt(seps[0].slice(col1+1, col1+3));
    var min2 = parseInt(seps[1].slice(col2+1, col2+3));
    var ampm1 = seps[0].slice(-2);
    var ampm2 = seps[1].slice(-2);
     if (ampm1 == "pm" && hour1 != 12) {
     hour1 = hour1 + 12;
     }
     if (ampm2 == "pm" && hour2 != 12) {
     hour2 = hour2 + 12; 
     }
     if (hour1 == 12 && ampm1 == "am") {
     hour1 = 0;
     }
     if (hour2 == 12 && ampm2 == "am") {
     hour2 = 0;
     }
    var time1 = (hour1*60) + min1;
    var time2 = (hour2*60) + min2;
     var diff = time2 - time1;
     
     if (diff < 0) {
     diff = diff + (60 * 24);
     }
     
     return diff;
}
console.log(countingminit1("12:30pm-11:00am"));