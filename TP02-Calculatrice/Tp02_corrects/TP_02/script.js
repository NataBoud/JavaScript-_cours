// ... => spread operator = copie d'un tableau
const touches = [...document.querySelectorAll(".bouton")]
const listeDataKey = touches.map((bouton) => bouton.dataset.key)
const ecranHaut = document.querySelector(".ecranHaut")
const ecranBas = document.querySelector(".ecranBas")

// Recupération de la data-key au clique d'un bouton.
touches.forEach((bouton) => {
    bouton.addEventListener("click", (event) => {
        let valeur = event.target.dataset.key
        Calculer(valeur)
    })
})

// Ecouteur évenement keydown.
document.addEventListener("keydown", (event) => {
    let valeur = event.key
    if (listeDataKey.includes(valeur)) {
        Calculer(valeur)
        console.log(listeDataKey);
    }
})

// Fonction permettant d'effectuer les actions des touches.
function Calculer(valeur) {
    switch (valeur) {
        case "Backspace": // touche 'C'
            ecranHaut.innerHTML = ""
            ecranBas.innerHTML = ""
            break;
        case "Enter": // touche '='
            let calcul = eval(ecranHaut.textContent)
            ecranBas.innerHTML = `= ${calcul}`
            break;
        default:
            ecranHaut.innerHTML += valeur
            break;
    }
}


window.addEventListener("error", (e) => {
  alert(`${ecranHaut.textContent}  ERREUR MATHS`);
});
