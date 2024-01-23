export class Person {
   
    constructor(lastname, firstname, age) {
        this.lastname = lastname
        this.firstname = firstname
        this.age = age
    }
    Speack() {
        return `Bonjour ${this.lastname}; prénom : ${this.firstname}`
    }
}

