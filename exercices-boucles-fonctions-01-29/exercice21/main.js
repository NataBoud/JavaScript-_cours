// Tableau 
let monTableau = [];
for (let compteur = 0; compteur < 10 ; compteur++) {
    let saisie = +prompt("Saisissez des 10 valeurs");
    monTableau.push(saisie);
    console.log(`${"\t".repeat(compteur)}` + saisie);
}


// Random integer
const generateArray = (max, length) => {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * max))
    console.log(`${"\t".repeat(i)}${randomArray[i]}`)
  }
}
let numbers = generateArray(90, 10);


// Random decimal
const generateNumbers = (max, length, decimal) => {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push((Math.random() * max).toFixed(decimal))
    console.log(`${"\t".repeat(i)}${randomArray[i]}`)
  }
}
let arrayNumbers = generateNumbers(90, 10, 2);



// Random number decimal
const generateArrayDecimal = (length, min, max, decimal) => (
  [...new Array(length)].map(() => (Math.random() * (max - min) + min).toFixed(decimal))
);
let num = generateArrayDecimal(10, 5, 78, 2);
 
for (let i = 0; i < num.length; i++) {
  console.log(`${"\t".repeat(i)}${num[i]}`);
}


// for (let i = 0; i < arrayLength; i++) {
//   randomArray.push(Math.floor(Math.random() * max))
//   let tab = ''
//   for(let j = 0; j < i; j++) {
//     tab += '\t'
//   }
//   console.log(`${tab}${randomArray[i]}`)
// }













