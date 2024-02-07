function BinaryReversal(str) { 
    let binary = parseInt(str).toString(2);
    console.log(binary);
    
    let size = Math.ceil(binary.length/8) * 8;
    while (binary.length < size) {
    binary = '0' + binary;
    }
    
    let newString = '';
    for (let i = 0; i < binary.length; i++) {
    newString = binary[i] + newString;
    }
    
    return parseInt(newString, 2);
   }
   console.log(BinaryReversal(213));