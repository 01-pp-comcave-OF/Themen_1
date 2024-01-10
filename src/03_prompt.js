const prompt = require('prompt-sync')({sigint: true});

// Alles muss man selbe machen lassen! ...
let firstName = prompt("vorname?: ");
let familyName = prompt("Name?");
console.log("Hallo, " + firstName + " " + familyName + "!");
