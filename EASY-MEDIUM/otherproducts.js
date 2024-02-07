function OtherProducts(arr) { 
    let results = [];
    for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
    product *= arr[j];
    }
    }
    results.push(product);
    }
    return results.join('-');
}
console.log(OtherProducts([1,2,3,4,5]));
   