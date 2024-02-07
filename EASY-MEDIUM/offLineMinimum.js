function OffLineMinimum(strArr) {
    let integers = [];
    let eliminated = [];
    for (const item of strArr) {
      if (!isNaN(item)) {
        integers.push(Number(item));
      } else {
        let smallest = Math.min(...integers);
        eliminated.push(smallest);
        integers.splice(integers.indexOf(smallest), 1);
      }
    }
  
    return eliminated.join(",");
}
console.log(OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"]));