function ArrayMatching(strArr) {
    arr1 = strArr[0].match(/\d+/g).map(Number);
    arr2 = strArr[1].match(/\d+/g).map(Number);
    if (arr1.length > arr2.length) {
    arr2 = arr2.concat(new Array(arr1.length - arr2.length).fill(0));
    } else if (arr1.length < arr2.length) {
    arr1 = arr1.concat(new Array(arr2.length - arr1.length).fill(0));
    }
    var sum = [];
    for (var i = 0; i < arr1.length; i++) {
    sum.push(arr1[i] + arr2[i]);
    }
    return sum.join('-');
   }

console.log(ArrayMatching(["[1, 2, 1]", "[2, 1, 5, 2]"]
));