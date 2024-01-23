// exo 13

// CORRECTION

let nombre = parseInt(prompt("Saisir un nombre supérieur à 0"));

while (isNaN(nombre) || nombre <= 0) {
    nombre = parseInt(prompt("ERREUR /!\\ Saisir un nombre supérieur à 0"));
}

// On boucle jusqu'à la moitié du nombre + 1 (pour les nombres impairs)
for (let entier = 1; entier < nombre / 2 + 1; entier++) {
    // On déclare une somme et une chaîne que l'on va construire
    let somme = entier;
    let chaine = `${nombre} = ${entier}`;
    // Cette boucle permet de faire la somme des nombre à partir du compteur de la boucle supérieure
    for (let compteur = entier + 1; compteur < nombre / 2 + 1; compteur++) {
        somme += compteur;
        chaine += `+${compteur}`;

        // Si on dépasse le nombre visé, on quitte la boucle
        if (somme > nombre) {
            break;
        
        // Si la somme est égale au nombre visé, on l'affiche et on quitte la boucle
        } else if (somme === nombre) {
            console.log(chaine);
            break;
        }
    }
}
