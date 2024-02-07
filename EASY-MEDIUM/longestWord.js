/* 
Input: "fun&!! time"
Output: time
Input: "I love dogs"
Output: love
*/

function LongestWord(sen) {
  sen = sen.trim();
  var arr = sen.split(" ");
  const tr = arr.map((sp) => sp.replace(/[^a-zA-Z]/g, ""));
  tr.sort((a, b) => a.length - b.length);
  console.log(tr.pop());
}
let input = "fun&!! time";
LongestWord(input);
