// ex 1

let nom = prompt("Saisissez votre nom")
let prenom = prompt("Saisissez votre prénom");
let message = `Bonjour ${nom} ${prenom}`;

console.log(message);
alert(message);


// ex 2

let nb1 = prompt("Entrez le nombre");
let nb2 = prompt("Entrez le nombre");
result = +nb1 + +nb2;
console.log(result);
let message1 = `${nb1} + ${nb2} = ${result}`;
console.log(message1);
alert(message1);


// ex 3

let r = +prompt("Entrez le rayon");
let h = +prompt("Entrez le hauteur");

volume = (Math.PI * (r**2)) * h / 3
console.log(volume);
let message2 = `Le volume du cône droit est ${Math.round(volume)} cm3`;
alert(message2);


// ex 4

let votreSaisi = +prompt("Entrez votre age");
alert(+votreSaisi >= 18)


// ex 5

let temp =  +prompt("Entrez la température");
if (temp < 0) {
    alert("SOLIDE");
} else if (temp >=0 && temp <= 100 ) {
    alert("LIQUIDE");
} else {
    alert("GAZEUX");
}

// ex 6

let age =  +prompt("Entrez votre age");
let salaire =  +prompt("Entrez salaire souhaité: ");
let nbYearsExpert =  +prompt("Entrez votre expérience: ");
let message3 = "";

if (age <= 30) {
    message += "Vous êtes trop jeune !";
}

if (salaire > 40000) {
    message += "Vous demandez trop d'argent !";
}

if (nbYearsExpert < 5) {
    message += "Vous n'avez pas assez d'expérience !";
}

console.log(message3 || "Vous êtes embauché !");


// DEMO

let compteur = 0;
while (compteur < 5) {
    compteur++
    console.log(compteur);
}

do {
    console.log(`hello world: ${compteur}`);
    compteur++;
} while (compteur < 10);


for (let cpt = 0; cpt < 3; cpt++) {
    console.log(cpt);

}

for (let cpt = 10; cpt > 0; cpt -= 2) {
    console.log(cpt);

}

for (let cpt = 0; cpt < 10; cpt++) {
    if (cpt % 2 === 0) {
        console.log("Paire: continue");
        continue;
    }
    if (cpt === 7) {
        console.log("7 - break");
        break;
    }
    console.log(cpt);
}



