import { Vehicule } from "./Vehicule.js";

export class Voiture extends Vehicule {
    constructor(marque, modele, kilometrage, annee, clim) {
        super(marque, modele, kilometrage, annee)
        this.clim = clim
    }

    Display() {
        return  `${super.Display()} - ${this.clim ? "Climatisée" : "Non climatisée"}`
    }
}