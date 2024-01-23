import { Vehicule } from "./classes/Vehicule.js"; 
import { Voiture } from "./classes/Voiture.js";
import { Moto } from "./classes/Moto.js";


// let voiture = new Vehicule("Renault", "Kangoo", 240.000, 2001)
let voiture = new Voiture("Renault", "Kangoo", 240.000, 2003, false)
let moto = new Moto("BMW", "R11500R", 65.000, 2005)

const result = document.querySelector(".result");
const result2 = document.querySelector(".result2");

result.innerHTML +=voiture.Display()
result2.innerHTML +=moto.Display()

// console.log(voiture.Display());
// console.log(voiture2.Display());
// console.log(moto.Display());