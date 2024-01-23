import { CompteBancaire } from "./classes/CompteBancaire.js";
import { CompteEpargne } from "./classes/CompteEpargne.js";

let client = new CompteBancaire(1000, "Victor Dupont");
let compteEpargne = new CompteEpargne(87890, "Victor Dupont", 4.5);

console.log(compteEpargne.AfficherInfoClient());
console.log(compteEpargne.CalculInteret());
console.log(client.DeposerArgent(5000));
console.log(client.RetirerArgent(800));
console.log(client.AfficherSolde());

const displayCompteEpargne = document.querySelector("h1");
const displayInteret = document.querySelector("h3");

displayCompteEpargne.innerHTML += compteEpargne.AfficherInfoClient();
displayInteret.innerHTML += compteEpargne.CalculInteret();









