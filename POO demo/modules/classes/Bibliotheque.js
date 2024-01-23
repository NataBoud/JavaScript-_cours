export class Bibliotheque {
    constructor(nom) {
        this.nom = nom
        this.listeAdherant = []
        this.listeDocument = []
        this.messageBienvenue()
    }

    ajouterAdherant(adherant) {
        this.listeAdherant.push(adherant)
        console.log(`Bienvienue ${adherant.nom} dans la bibliothèque : ${this.nom}`);
    }

    ajouterDocument(document) {
        this.listeDocument.push(document)
    }

    messageBienvenue() {
        console.log(`Création dans la bibliothèque : ${this.nom}`);
    }

}