function verificationAdn(chaine) {
    const lettresValides = "atcg";
    for (lettre of chaine) {
        // if (lettre !== "a" || lettre !== "t" || lettre !== "c" || lettre !== "g") {
        //     return false;
        // }
        if (!lettresValides.includes(lettre)) {
            return false;
        }
    }
    return true;
}

function saisieAdn(message) {
    let saisie = prompt(message).toLowerCase();
    
    while (!verificationAdn(saisie)) {
        saisie = prompt(`ERREUR /!\\${message}`).toLowerCase();
    }
    return saisie;
}

function proportion(chaine, sequence) {
    let occurrenceSequence = 0;
    // On parcourt la chaine de caractère jusqu'à sa taille - la séquence !
    for (let compteur = 0; compteur <= chaine.length - sequence.length; compteur++) {
        // On regarde si le premier caractère de la séquence est égal à celui de la séquence
        if (chaine.charAt(compteur) === sequence.charAt(0)) {
            // On fait une sous-chaîne de la taille de la séquence pour la comparer
            if (chaine.substring(compteur, compteur + sequence.length) === sequence) {
                occurrenceSequence++;
            }
        }
    }
    return occurrenceSequence;
}

function proportionBis(chaine, sequence) {
    return chaine.split(sequence).length - 1;
}

function proportionBisBis(chaine, sequence) {
    let occurrenceSequence = 0;
    let index = 0;
    while (index !== -1) {
        index = chaine.indexOf(sequence, index);
        if (index !== -1) {
            index++;
            occurrenceSequence++;
        }
    }
    return occurrenceSequence;
}

function pourcentageSequence(chaine, sequence) {
    let ocurrences = proportion(chaine, sequence);
    let result = (ocurrences * sequence.length / chaine.length) * 100
    return result.toFixed(2);
}

let chaine = saisieAdn("Saisir la chaîne");
let sequence = saisieAdn("Saisir la séquence");

console.log(`Il y ${pourcentageSequence(chaine, sequence)}% de ${sequence} dans ${chaine}`);