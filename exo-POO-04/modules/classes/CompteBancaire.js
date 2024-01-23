export class CompteBancaire {
  constructor(solde, titulaire) {
    this.solde = solde;
    this.titulaire = titulaire;
  }

  DeposerArgent(argent) {
    this.solde += argent;
    return `Virement reçu : ${argent} €.`;
  }

  RetirerArgent(argent) {
    this.solde -= argent;
    return `Retrait : ${argent} €.`;
  }

  AfficherSolde() {
    return `Solde du compte : ${this.solde} €.`;
  }

  AfficherTitulaire() {
    return this.titulaire;
  }
}
