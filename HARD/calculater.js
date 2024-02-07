function calculater(str) {
    var Operators = ['+', '-', '/', '*'];
    var Str = str.replace(/(.)\(/g, function (ch, c1) {
        if (Operators.indexOf(c1) != -1)
            return ch;
        else
            return ch.replace(c1, c1 + '*');
    });
    return eval(Str);
}
console.log(calculater("6*(4/2)+3*1"));
console.log(calculater("6/3-1"));
console.log(calculater("7-4-1+8(3)/2"));

