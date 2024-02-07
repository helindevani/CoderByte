function arrayRotation(arr) {
    const rotateDelta = arr[0];

    const newArray = arr
        .slice(rotateDelta, arr.length)
        .concat(arr.slice(0, rotateDelta));

    return newArray.join('');
}
console.log(arrayRotation([2,3,1,4,6]));