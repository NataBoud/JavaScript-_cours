export class Personne {
    constructor(nom, age, email) {
        this.nom = nom
        this.age = age
        this.email = email
    }


    Display() {
        console.log(`Nom : ${this.nom} - Age : ${this.age}`);
    }

    direBonjour() {
        console.log(`Bonjour, je suis : ${this.nom}`);
    }

    direBonjourPersonne(personne) {
        console.log(`Bonjour, je suis : ${personne.nom}`);
    }





}


