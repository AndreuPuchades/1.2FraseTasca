'use strict'

const {
    letters,
    words,
    upperString,
    titleString,
    backwardsLetters,
    backwardsWords,
    palindrome
} = require("./functions");

const frase = prompt("Introduzca una frase");

console.log(letters(frase));
console.log(words(frase));
console.log(upperString(frase));
console.log(titleString(frase));
console.log(backwardsLetters(frase));
console.log(backwardsWords(frase));
console.log(palindrome(frase));