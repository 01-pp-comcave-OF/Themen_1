
/*Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 2000
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


