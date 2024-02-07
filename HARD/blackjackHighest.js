function blackjack(strarr){
    var highest= -1;
    var highcard="";
    var total=0;
    var acefound=false;
    var cards=["ace","two","three","four","five","six","seven","eight","nine","ten","jack","queen","king"];
    var values=[1,2,3,4,5,6,7,8,9,10,10,10,10];
    for(var i=0;i<strarr.length;i++){
        for(var j=0;j<cards.length;j++){
            if(strarr[i]==cards[j]){
                total+=values[j];
                if(j>highest){
                    highest=j;
                    highcard=cards[j];
                }
                if(j==0)acefound=true;
            }
        }
    }
    if(acefound && total <=11){
        total += 10;
        highest=11;
        highcard= "ace";
    }
    if(total<21) return "below" +" "+ highcard;
    if(total>21) return "above" +" "+ highcard;
    if(total==21) return "blackjack" +" "+ highcard;

    return strarr;


}
console.log(blackjack(["four","ten","king"]));
console.log(blackjack(["four","ten","ace"]));
console.log(blackjack(["queen","ace"]));