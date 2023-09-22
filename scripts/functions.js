'use strict'

function letters(cadena) {
	return cadena.length;
}

function words(cadena) {
	return cadena.split(" ").length;
}

function upperString(cadena) {
	return cadena.toUpperCase();
}

function titleString(cadena) {
	const arrayPalabras = cadena.split(" ");

	const capitalizedWords = arrayPalabras.map(arrayPalabras => {
	  if (arrayPalabras.length > 0) {
		return arrayPalabras.charAt(0).toUpperCase() + arrayPalabras.slice(1).toLowerCase();
	  } else {
		return arrayPalabras;
	  }
	});
    
	return capitalizedWords.join(" ");
}

function backwardsLetters(cadena) {
	return cadena.split("").reverse().join("");
}

function backwardsWords(cadena) {
	return cadena.split(" ").reverse().join(" ");
}

function palindrome(cadena) {
	return cadena.replaceAll(" ", "").split("").reverse().join("").toLowerCase() === cadena.replaceAll(" ", "").toLowerCase();
}

module.exports = {
	letters,
	words,
	upperString,
	titleString,
	backwardsLetters,
	backwardsWords,
	palindrome
}
