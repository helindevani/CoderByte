function MeanMode(arr) { 
    // Find mode
    let mostOccurances = 0;
    let mode = 0;
    for (let i = 0; i < arr.length; i++) {
    let marco = arr[i];
    for (let j = i+1, count = 0; j < arr.length; j++) {
    if (marco === arr[j]) {
    // match!
    count++;
    if (count > mostOccurances) {
    mostOccurances = count;
    mode = arr[j];
    }
    }
    }
    }
    
    
    // Find mean
    let mean = 0;
    for (let i = 0; i < arr.length; i++) {
    mean += arr[i];
    }
    mean = Math.round(mean/arr.length);
    
    return (mean === mode) ? 1 : 0;
    
   }
   console.log(MeanMode([1,2,3,4,5]));
   