function EvenPairs(str) {
    var regEx = /[24680](.)*[24680]/
    return regEx.test(str);
   }
console.log(EvenPairs("f178svg3k19k46"));   