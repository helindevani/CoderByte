function mostFrequent(arr) {
    arr.sort();
    var most = 0;
    var frequency = 1;
    for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
    frequency++;
    if (frequency > most) {
    most = frequency;
    }
    } else {
    frequency = 1;
    }
    }
    return most;
   }
   function WaveSorting(arr) {
    // as long as we can put some other number in between the same number, it works
    return mostFrequent(arr) < (arr.length / 2);
   }
console.log(WaveSorting( [0, 1, 2, 4, 1, 1, 1]));