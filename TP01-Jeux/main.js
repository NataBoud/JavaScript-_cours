let input = document.querySelector("#userInput");
let btn = document.querySelector("#btnValiderInput");
let help = document.querySelector(".help");
let check = document.querySelector(".check");
let count = document.querySelector(".count");

check.textContent = "J'ai jénéré un nombre entre 1 et 50 inclus" ;
help.textContent = "Essayez de deviner en proposant ci-dessous :" ;
let item = 0;
let randNum = 1 + Math.floor(Math.random() * 50);
let userNum;
console.log(randNum);

function rejouer() {
    location.reload()
}

document.addEventListener("keydown", (event) => {
    if(event.key == "Enter") {
        valider()
    }
    })

const valider = () => {
  userNum = input.value;
    if (userNum < randNum) {
        help.textContent = `Le nombre mystère est plus grand que ${userNum}`;
        item++;
        count.textContent = item;
    } else if (userNum >  randNum ) {
        help.textContent = `Le nombre mystère est plus petit que ${userNum}`;
        item++;
        count.textContent = item;
    } else {
        check.textContent = "Bravo vous avez gagner !";
        help.textContent = `Le nombre mystère était ${randNum}`;

        item++;
        count.textContent = item;
    }

    if (item >= 3 && userNum !== randNum) {
        item = 0;
        check.textContent = "Vous avez utilisez 3 essaies !";
        help.textContent = "Le nombre mystère n'a pas été deviné. Rejouer ?" ;
    }
    input.value = "";
};





