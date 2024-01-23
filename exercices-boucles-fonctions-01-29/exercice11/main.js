// exo 11

let epFeuille = 0.1;
let nbPlie = 0;
let mult = 2;

while (epFeuille < 400000) {
    nbPlie++
    epFeuille *= mult;  
}
console.log(`${nbPlie} fois`);


// Corrections

let epaisseurFeuille = 0.0001;
let nombrePlie = 0;

while(epaisseurFeuille < 400) {
    nombrePlie++;
    epaisseurFeuille *= 2;
}

console.log(`Il faut plier la feuille ${nombrePlie} fois pour qu'elle fasse 400m d'épaisseur`);


let papier = 400;
let nombreDeplie = 0;

while(papier >= 0.0001) {
    papier /= 2;
    nombreDeplie++;
}

console.log(`Il faut déplier la feuille ${nombreDeplie} fois pour qu'elle fasse  0,1 mm`);


