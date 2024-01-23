const result = document.querySelector(".result")

let salaire,
    age,
    anciennete,
    indemnite


function valider () {
    salaire = document.querySelector("#salaire").value
    age = document.querySelector("#age").value
    anciennete = document.querySelector("#anciennete").value

    if (anciennete >= 1 && anciennete <= 10) {
        indemnite = anciennete * (salaire/2)
    }

    if (anciennete > 10) {
        indemnite = 10 * (salaire/2)
        indemnite += (anciennete - 10) * salaire
    }

    if (age > 45 && anciennete >= 1) {
        if (age < 50) {
            indemnite += 2 * salaire
        } else {
            indemnite += 5 * salaire
        }
    }

    result.innerHTML = `<p>Le montant de l'indemnité pour un salarié de ${age} ans et avec 
    ${anciennete} années d'ancienneté et un salaire de ${salaire} euros s'élève à ${indemnite} euros</p>`
}