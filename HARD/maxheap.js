function maxHeapChecker(arr) {
    const outOfPlaceNodes = [];
  
    for (let i = 0; i < arr.length; i++) {
        const parent = arr[i];
        const leftChildIndex = 2 * i + 1;
        const rightChildIndex = 2 * i + 2;
  
        if (arr[leftChildIndex] > parent) {
            outOfPlaceNodes.push(arr[leftChildIndex]);
        }
  
        if (arr[rightChildIndex] > parent) {
            outOfPlaceNodes.push(arr[rightChildIndex]);
        }
    }
  
    if (outOfPlaceNodes.length === 0) {
        return "max";
    } else {
        return outOfPlaceNodes.join(',');
    }
}
  // Test cases
  console.log(maxHeapChecker([100, 19, 36, 17])); // Output: "max"
  console.log(maxHeapChecker([10, 19, 52, 13, 16])); // Output: "19,52"