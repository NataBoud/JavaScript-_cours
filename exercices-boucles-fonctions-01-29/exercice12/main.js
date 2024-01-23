// exo 12

// CORRECTION

let populationInitiale = +prompt("Saisir la population");
let taux = +prompt("Saisir un taux en %");
let populationVisee = +prompt("Saisir la population visée");
let annee = 0;

while(populationInitiale < populationVisee) {
    populationInitiale *= 1 + (taux / 100);
    annee++;
}

console.log(`La population visée sera atteinte en ${annee} années avec une population de ${Math.ceil(populationInitiale)} personnes`);