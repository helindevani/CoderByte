function getDivisors(num) {
    var divisors = [1];
    for (var i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
    divisors.push(i);
    }
    }
    divisors.push(num);
    return divisors;
   }
   function ProductDigits(num) {
    var divisors = getDivisors(num);
    var pairs = [];
    for (var i = 0; i < divisors.length / 2; i++) {
    pairs.push([divisors[i], divisors[(divisors.length - 1) - i]]);
    }
    
    return pairs.map(pair => ('' + pair[0] + pair[1]).length).sort()[0];
   }