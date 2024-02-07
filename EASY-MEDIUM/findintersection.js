/*
Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13
Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10
*/
function findintersection(input){
    const [first,second]=input.map(s=>s.split(","));
    const resultmap={};
    const result=[];
    for(const number of first){
        resultmap[number]=true;
    }
    for(const number of second){
        if(resultmap[number]){
            result.push(number);
        }
    }
    return result.length ? result.join(","):false;
}
console.log(findintersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));