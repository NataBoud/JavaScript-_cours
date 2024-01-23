import { Person } from "./classes/Person.js";
import { Etudiant } from "./classes/Etudiant.js";


let person = new Person("Victor", "Doe", 20)
let student = new Etudiant("Arthur", "Doe", 18, 1234354556689)


person.Speack()
student.Display()
console.log(person.Speack());
console.log(student.Display());