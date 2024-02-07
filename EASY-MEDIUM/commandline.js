function CommandLine(str) {
    let splitter = /\s(?=\w+=)/;
    let wordArr = str.split(splitter);
    wordArr = wordArr.map(pair => {
        let pairArr = pair.split('=');
        pairArr = pairArr.map(word => {
            return word.length.toString();
        });
        return pairArr.join('=');
    });
    return wordArr.join(' ');
}
console.log(CommandLine("letters=A B Z T numbers=1 2 26 20 combine=true"));