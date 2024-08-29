/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let wordsArray = s.split(' ').filter(palabra => palabra !== '');
    let lastWordArray = wordsArray[wordsArray.length - 1];
    return lastWordArray.length;
};

const s = "Hola Mundo"
const lastWordCounter = lengthOfLastWord(s)
console.log(lastWordCounter);