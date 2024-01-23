export class Voiture {
    constructor(marque, modele, vitesse) {
        this.marque = marque
        this.modele = modele
        this.vitesse = vitesse
    }

    acceleration() {
        this.vitesse += 10
        console.log(`La ${this.marque} accélére, elle roule à ${this.vitesse} km/h`);
    }

    tourner() {
        this.vitesse -= 5
        console.log(`La ${this.marque} tourne, elle roule à ${this.vitesse} km/h`);
   }

}