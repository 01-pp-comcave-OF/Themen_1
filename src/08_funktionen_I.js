/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call
// test();

// // Funktionsrumpf | calle
// // Funktionsdeklaration





/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Call
// ausgabeNamen();

//Funktion
// function ausgabeNamen(){
//     // interne Variable | what happens in Vegas ...
//     let firstName = "Benjamin";
//     console.log("Hallo, " + firstName + "!");
// }

// console.log(firstName); // Fehler : scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// Argumente sind Daten für parameter
// ausgabeNamen2("Maria"); // Argument 
// ausgabeNamen2("Nadim"); 
// ausgabeNamen2("Melanie"); 

// function ausgabeNamen2(firstName){  // Parameter
//     console.log("Hallo, " + firstName + "!");
// }

/***** Funktionen 02b *****/
// 2c. mehrere parameter / argumente

// ausgabeNamenParams("Max","Mütze");

// const prompt = require('prompt-sync')({sigint: true});
// fullName(prompt("vorName?"),prompt("Name?")); // piping

// function fullName(firstName, familyName){  // Parameter
//     console.log("Hallo, " + firstName + " " + familyName + "!");
// }

/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle
// ausgabeNamenSRP("Max","Mütze");

function ausgabeNamenSRP(firstName, familyName){  // Parameter

    // 1. Funktionalität: string composing
    const GAP = " ";
    let outputStr = "Hallo, " + firstName + GAP + familyName + "!"

    // 2. Funktionalität: string output
    console.log(outputStr);
}

/***** Funktionen 03b *****/
// 1. FunktionalitätM: string composing


output(getString("Max", "Mütze"));

function getString(firstName, familyName) {
    const GAP = " ";
    let outputStr = "Hallo, " + firstName + GAP + familyName + "!"
    return outputStr;  // return schickt die Daten an den call
    console.log("hi"); // wont work (after return command)
}

// 1. FunktionalitätM: string output
// output("hi")
// output(2)
// output(true)
function output(outputData) {
    console.log(outputData);
}


