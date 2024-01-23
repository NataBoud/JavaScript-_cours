const prenom = document.querySelector("#prenom"),
    listePrenom = document.querySelector("#listePrenom")

let tableauPrenom = []

// cont prenom = document.getElementById("prenom")

function valider () {
    tableauPrenom.push(prenom.value)
    displayTab()
    prenom.value = ""
}

function supprimer() {
    let prenomFound = tableauPrenom.find((p) => p == prenom.value)

    if(prenomFound) {
        tableauPrenom = tableauPrenom.filter((prenom) => prenom != prenomFound)
        prenom.value = ""
        displayTab()
    }
}

function displayTab () {
    listePrenom.innerHTML = ""
    tableauPrenom.forEach((prenom) => {
        listePrenom.innerHTML += `<li>${prenom}</li>`
    })
}