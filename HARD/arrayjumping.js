function arrayJumping(arr) {
    const max = Math.max(...arr);
    const startIndex = arr.indexOf(max);

 
    let queue = [[startIndex]];
    

    while (queue.length !== 0) {
        const nextQueue = [];

        for (let i = 0; i < queue.length; i++) {
            const indexList = queue[i];
            const lastIndex = indexList[indexList.length - 1];
            
            const left =(((lastIndex - arr[lastIndex]) % arr.length) + arr.length) % arr.length;
            const right = (lastIndex + arr[lastIndex]) % arr.length;

            if (left === startIndex || right === startIndex) {
                // Success!
                return indexList.length;
            }

            if (!indexList.includes(left)) {
                const leftArr = indexList.slice();
                leftArr.push(left);
                nextQueue.push(leftArr);
            }

            if (!indexList.includes(right)) {
                const rightArr = indexList.slice();
                rightArr.push(right);
                nextQueue.push(rightArr);
            }
        }
        queue = nextQueue;
    }

    // No path possible
    return -1;
}
console.log(arrayJumping([2, 3, 5, 6, 1]));