function lineordering(strarr){
    const people=Array.from(new Set(strarr.join(',').match(/[A-Z]+/g)));

    const permuteation=permutator(people);
    const validpermutation=[];

    permuteation.forEach(element => {
        const permutationvalid= relationspossible(element,strarr);
        if(permutationvalid){
            validpermutation.push(element);
        }
        
    });

    return validpermutation.length;
}

function relationspossible(people,relations){
    for(let i=0;i<relations.length;i++){
        let [personA,relationship,personB]=relations[i].split('');

        if(relationship==='<'){
            [personB,personA]=[personA,personB];
        }

        const indexa=people.indexOf(personA);
        const indexb=people.indexOf(personB);

        if(indexa<=indexb){
            return false;
        }
    }
    return true;
}

const permutator = (inputArr) => {
    let result = [];
  
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
       }
     }
   }
  
   permute(inputArr);
  
   return result;
  }

console.log(lineordering(["J>B","B<S","D>J"]));