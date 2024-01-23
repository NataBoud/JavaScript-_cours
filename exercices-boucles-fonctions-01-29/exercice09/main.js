// exo 9

// var 1 Corrections Premier style d'affichage

const tables = +prompt("Saisir un nombre tables (>1):");

for(let table = 1; table < tables + 1; table++) {
    console.log(`Tables des ${table} :`);
    for(let facteur = 1; facteur < 11; facteur++) {
        console.log(`\t${table} x ${facteur} = ${table * facteur}`);
    } 
}

// Deuxième style d'affichage

// l'entête des colonnes
let col = "";
for(let colonne = 1; colonne < 11; colonne++) {
    col += `\t${colonne}`;
}
console.log(col);
console.log("-".repeat(43));
//les tables en lignes
for(let table = 1; table < tables + 1; table++) {
    let ligne = "";
    for(let facteur = 1; facteur < 11; facteur++) {
        ligne += `\t${table * facteur}`
    }
    console.log(ligne);
}


// var 2

let num = +prompt("Entrez votre nombre");
for (let numbr = 1; numbr <= num; numbr++) {
    for (let nb = 1; nb <= 10; nb++) {5
        let mult = numbr * nb
        console.log(`${numbr} x ${nb} = ${mult}`);
    }
}

// var 3 sample

let n = +prompt("Entrez votre nombre");
console.log(`Table des ${n} :`);
for (let nb = 1; nb <= 10; nb++) {
    let mult = n * nb
    console.log(`${n} x ${nb} = ${mult}`);
}