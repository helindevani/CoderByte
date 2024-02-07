function supeerincreasing(arr)
{
    for (let i = 0, sum = 0; i < arr.length; i++) {
        if (arr[i] <= sum) {
        return false;
        }
        sum += arr[i];
        }
        return true;
}
console.log(supeerincreasing([1,2,5,10]));