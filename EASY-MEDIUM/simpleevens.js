function SimpleEvens(num) { 
    return num.toString(10).search(/[13579]/) === -1 ? 'true' : 'false';
   }
console.log(SimpleEvens(22220002005202));   