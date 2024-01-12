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
function ausgabeNamen(){
    // interne Variable | what happens in Vegas ...
    let firstName = "Benjamin";
    console.log("Hallo, " + firstName + "!");
}

// console.log(firstName); // Fehler : scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

ausgabeNamen2("Maria"); // Argument --> Daten für parameter
ausgabeNamen2("Nadim"); 
ausgabeNamen2("Melanie"); 

function ausgabeNamen2(firstName){  // Parameter
    console.log("Hallo, " + firstName + "!");
}
