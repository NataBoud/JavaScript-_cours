// DOM
const touches = [...document.querySelectorAll(".bouton")];
const listeKeycode = touches.map((touche) => touche.dataset.key);
const ecranHaut = document.querySelector(".ecranHaut");
const ecranBas = document.querySelector(".ecranBas");


document.addEventListener("keydown", (e) => {
  const valeur = e.key;
  calculer(valeur);
});

touches.forEach((bouton) => {
  bouton.addEventListener("click", (e) => {
    let valeur = e.target.dataset.key;
    calculer(valeur);
  });
});

const calculer = (valeur) => {
  if (listeKeycode.includes(valeur)) {
    switch (valeur) {
      case "Backspace":
        ecranHaut.innerHTML = "";
        ecranBas.innerHTML = "";
        break;
      case "Enter":
        const calcul = eval(ecranHaut.textContent);
        ecranBas.textContent = `= ${calcul}`;
        break;
      default:
        const indexKeycode = listeKeycode.indexOf(valeur);
        const touche = touches[indexKeycode];
        ecranHaut.textContent += touche.innerHTML;
    }
  }
};

window.addEventListener("error", (e) => {
  alert(`${ecranHaut.textContent}  ERREUR MATHS`);
});

// const sum = (a, b) => a + b;
// const substract = (a, b) => a - b;
// const multyply = (a, b) => a * b;
// const division = (a, b) => a / b;

// const OPERATIONS = {
//   sum: "+",
//   substract: "-",
//   multyply: "*",
//   division: "/",
// };

// function calculate({ a, b, operation }) {
//   let = null;
//   switch (operation) {
//     case OPERATIONS.sum:
//       result = sum(a, b);
//       break;

//     case OPERATIONS.substract:
//       result = substract(a, b);
//       break;

//     case OPERATIONS.multyply:
//       result = multyply(a, b);
//       break;

//     case OPERATIONS.division:
//       result = division(a, b);
//       break;
//     default:
//       break;
//   }
//   return result;
// }
