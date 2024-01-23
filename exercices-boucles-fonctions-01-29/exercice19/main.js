//exo 19

let word = prompt("Saisir un mot");
let = compterLettreA = (word) => {
    let nbLetterA = 0;
    for (let i = 0; i < word.length; i++) {
        if(word.toLowerCase()[i] === "a") nbLetterA++;
    }
    console.log(`résultat: ${nbLetterA}`);
    return nbLetterA
}
compterLettreA(word)


// Correction

function compterNombreA(mot) {
    let compteurLettreA = 0;
    for(let compteur = 0; compteur < mot.length; compteur++) {
        if(mot.charAt(compteur).toLowerCase() === 'a') {
            compteurLettreA++;
        }
    }
    return compteurLettreA;
}

function compterNombreABis(mot) {
    // split permet de transformer une chaîne en tableau
    // filter permet de filtrer un tableau et renvoie un nouveau tableau
    // filter attend une fonction de filtre qui prend un param l'élément du tableau et renvoie un booléen
    // .length permet d'obtenir la taille du tableau
    return mot.split("").filter(l => l.toLowerCase() === 'a').length;
}

console.log(compterNombreA("Arthur")); // 1
console.log(compterNombreA("Annabelle")); // 2
console.log(compterNombreA("AaAaaA")); // 6

console.log(compterNombreABis("Arobase")); // 2



