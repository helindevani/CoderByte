function gasStation(station) {
  station = station.map((elem) => elem.split(":").map(Number)); // Splitting and converting to numbers
  let gas = 0;
  let expense = 0;
  let index;
  for (let i = 1; i < station.length; i++) {
    gas += station[i][0];
    expense += station[i][1];
    if (station[i][0] > station[i][1]) {
      index = i;
    }
  }
  if (gas - expense < 0) {
    return "Impossible";
  }
  return index;
}
  // Test cases
const input1 = ["4", "3:1", "0:1", "2:2", "1:2"];
const input2 = ["4", "1:1", "2:2", "1:2", "0:1"];
const input3 = ["4", "3:1", "2:2", "1:2", "0:1"];
console.log(gasStation(input1));
console.log(gasStation(input2));
console.log(gasStation(input3));