
/*Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980
const birthYearMark = 1990

// Berechnung Alter
let date = new Date(); // systemfunktion Datum
let year = date.getFullYear(); // Daten liefern lassen !!
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("Datum: " + date);

//Deklaration
let isJohnOlder // is John Older? --> y/n --> true / false
isJohnOlder = (ageJohn > ageMark); // test
isJohnEqual = (ageJohn == ageMark);
console.log("isJohnEqual: " + isJohnEqual);


