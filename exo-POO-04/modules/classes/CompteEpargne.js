import { CompteBancaire } from "./CompteBancaire.js";

export class CompteEpargne extends CompteBancaire {
  constructor(solde, titulaire, tauxInteret) {
    super(solde, titulaire)
    this.tauxInteret = tauxInteret
  }
  CalculInteret(interet) {
    interet = (this.tauxInteret * this.solde) / 100;
    return `les intérêts sur le solde : ${interet} €`;
  }

  AfficherInfoClient() {
    return `Titulaire du compte : ${this.titulaire}<br>Solde du compte : ${this.solde} €<br>Le taux d'intérêt : ${this.tauxInteret} %`;
  }
}
