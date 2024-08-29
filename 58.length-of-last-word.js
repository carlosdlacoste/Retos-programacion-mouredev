/**
 * @param {string} s
 * @return {number}
 */


/*
    Given a string s consisting of words and spaces, return the length of the last word in the string.
    A word is a maximal substring consisting of non-space characters only.
*/
var lengthOfLastWord = function(s) {
    let wordsArray = s.split(' ').filter(palabra => palabra !== '');
    let lastWordArray = wordsArray[wordsArray.length - 1];
    return lastWordArray.length;
};

const s = "Hola Mundo"
const lastWordCounter = lengthOfLastWord(s)
console.log(lastWordCounter);