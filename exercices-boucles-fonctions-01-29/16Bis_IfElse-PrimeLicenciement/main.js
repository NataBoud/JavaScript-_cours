let dernieSalaire = document.querySelector("#dernieSalaire")
let age = document.querySelector("#age")
let anciennete = document.querySelector("#anciennete")
let messagePrime = document.querySelector("p")
let result = 0

const valider = () => {
    if (anciennete.value < 10) {
        result = dernieSalaire.value / 2
        
    } else {
        result = dernieSalaire.value
    }
    
    if (age.value > 45 && age.value < 49) {
        result = dernieSalaire.value * 2
    } 
    
    if (age.value > 50) {
        result = dernieSalaire.value * 5
    }
   
    let prime = document.createElement("p")

    prime.innerHTML = `Le montant de l'indemnité pour un salaire de 
    ${dernieSalaire.value} euros
    pour un salarié de 
    ${age.value} ans
    avec une ancienneté de
    ${anciennete.value} ans
    s'élève à
    ${result} euros`

    dernieSalaire.value = ""
    age.value = ""
    anciennete.value = ""
    messagePrime.append(prime);
    
}


