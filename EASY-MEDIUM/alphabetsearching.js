function AlphabetSearching(str) {
    str = str.toLowerCase();
    for (let i = 97; i < 97 + 26; i++) {
        let char = String.fromCharCode(i);
        if (!str.includes(char)) {
            return false;
        }
    }
    return true;
}
console.log(AlphabetSearching("abcdefghijklmnopqrstuvwxyyyyz"));//output true
console.log(AlphabetSearching("abcdefghijklmnopqrstuvwxyyyy"));//output false