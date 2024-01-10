
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

/*** variante 1 ***/
num1 = parseInt(prompt("bitte zahl1 eingeben!"));
num2 = parseInt(prompt("bitte zahl2 eingeben!"));
summe = num1 + num2;
console.log("die summe die zahlen ist: " + summe);




// let num1 = Number(prompt("first Number is?"));
// let num2 = Number(prompt("second Number is?"));
// let Summe = num1 + num2;
// console.log(Summe);
