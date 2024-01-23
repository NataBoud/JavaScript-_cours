import { Personne } from "./classes/Personne.js";
import { Bibliotheque } from "./classes/Bibliotheque.js";
import { Document } from "./classes/Document.js";
import { Journal } from "./classes/Journal.js";

let toto = new Personne("Toto", 30, "toto@mail.com")
let tata = new Personne("Tata", 30, "toto@mail.com")

let m2i = new Bibliotheque("M2I")
let bibliotheque1 = new Bibliotheque("M2I")
let lePetitPrince = new Document("Le petit prince")
let journal1 = new Journal("Journal", "12/01/2024")

let affichage = document.querySelector("p")


journal1.Display()



toto.direBonjour()
toto.direBonjour()

toto.direBonjour(tata)

m2i.ajouterAdherant(toto)
m2i.ajouterAdherant(tata)
m2i.ajouterDocument(lePetitPrince)

console.table(m2i.listeAdherant);
console.table(m2i.listeDocument);

affichage.innerHTML +=lePetitPrince.Display()



// let personnel = {
//     nom: "Toto",
//     age: 30,
//     email: "toto@mail.com",
//     direBonjour() {
//         console.log(`Bonjour je suis ${this.nom}`);
//     }
// }
// declancher la methode de l objet
// personnel.direBonjour()

// afficher la valeur
// console.log(personnel.email);


// verifier cle
// console.log("voiture" in personnel);

// Parcourir l'objet
// for (let key in personnel) {
//     console.log(`${key} : ${personnel[key]}`);
    
// }

// let personnel2 = new Object()  
// un autre syntaxe
