import { Person } from "./Person.js"

export class Etudiant extends Person {
    constructor(lastname, firstname, age, studentNumber) {
        super(lastname, firstname, age)
        this.studentNumber = studentNumber
    }
    Display() {
        return  `Nom : ${this.lastname}; prénom : ${this.firstname}; numéro d'étudiant : ${this.studentNumber}`
    }
}
