const livre = {
    titre: "Le Seigneur des Anneaux",
    auteur: "J.R.R. Tolkien",
    anneePublication: 1954,
    estDisponible: true,
    emprunter () {
        this.estDisponible = false;
        console.log("Le livre a été emprunté.");
    },
    retourner () {
        this.estDisponible = true;
        console.log("Le livre a été retourné.");
    }
}

console.log(livre.titre);

const disponibilite = () => {
    livre.estDisponible ? 
    console.log("Disponible") : 
    console.log("Non disponible")
}

livre.emprunter()
disponibilite()
livre.retourner()
disponibilite()
