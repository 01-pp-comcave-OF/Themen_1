/***** Erinnerung: Arrays *******/
 
let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");

// // nested arrays - Prinzip: [[[]]]
// // nested arrays  - hier: [[],[]]
// arr =   [
//                 ["Ich","bin","Max"],
//                 ["Ich","bin","Moritz"]
//         ];
 
// output(arr);
// output(arr[0]);
// output(arr[0][0]+ " " + arr[1][2]);
// output(arr[1][0]);
// output("------------");

// nested loop
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         output("Index i: " + i + " Index j: " + j);
//         output(arr[i][j]);      
//     }
// }


/***** Objekte 1 Daten/Funktionen *******/

// let person = {
//                 firstName:"Firas",
//                 familyName:"Al-Zaidi", 
//                 salary: [120000, 160000],
//                 permission: true,
//                 sayHello: function(){
//                     // return "Hallo, ich bin"
//                     return "Hello ,ich bin " + this.firstName;
//                 }
//             };


// output(person);
// output(person.familyName)
// output(person.firstName)
// output(person.salary[1])
// output(person.permission)
// output(person.sayHello())




// const txt = person.sayHello() + " Ich bin " + person.firstName + " und verdiene " + person.salary[1] + " p.a."

// output(txt);


/***** Objekte 2 - Hierarchie *******/
// Tiefer, tiefer - Irgendwo in der Tiefe gibt es ein Licht // K.Bush
// Der Baikalsee ist mit 1642 m der tiefste See der Erde. ...
// deep - deeper - deepest
// nested object {{{}}}

let baikal = {
                value: "10m",
                deep:{
                        deeper:{
                            tempreture:"4 Grad celisus",
                            deepest:"Das Licht - auf 1642m!"
                        }
                }
            };

output(baikal);
output(baikal.value);
output(baikal.deep.deeper.tempreture);
output(baikal.deep.deeper.deepest);



function output(outputData) {
    console.log(outputData);
}
