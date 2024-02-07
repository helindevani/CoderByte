/*
Input: "hello*3"
Output: Ifmmp*3
Input: "fun times!"
Output: gvO Ujnft!
*/

0;

function LetterChanges(str) {
  return str
    .split("")
    .map((c) =>
      String.fromCharCode(
        c >= "a" && c <= "z"
          ? ((c.charCodeAt(0) - 97 + 1) % 26) + 97
          : c >= "A" && c <= "Z"
          ? ((c.charCodeAt(0) + 1 - 65) % 26) + 65
          : c.charCodeAt(0)
      )
    )
    .join("")
    .replace(/[aeiou]/g, (letters) => letters.toUpperCase());
}

console.log(LetterChanges("hello*3"));
