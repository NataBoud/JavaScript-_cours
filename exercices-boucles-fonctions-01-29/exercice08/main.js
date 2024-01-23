// exo 8

// var 1 corrections

const chapitres = +prompt("Saisir un nombre de chapitres:");
const parties = +prompt("Saisir un nombre de parties:");
for(let chapitre = 1; chapitre < chapitres + 1; chapitre++) {
    console.log(`Chapitre n°${chapitre}`);
    for (let partie = 1; partie < parties + 1; partie++) {
        console.log(`\t-partie n°${chapitre}.${partie}`)
    }
}

// var 2

console.log("Table des matières :");
let num = 0;
while (num < 3) {
    num++;
    console.log(`\tChapitre ${num}`);
    for (let nb = 1; nb < 4; nb++) {
        console.log(`\t\t-partie ${num}.${nb}`);
    }
}
