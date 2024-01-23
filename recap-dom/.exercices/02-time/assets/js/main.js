/*
    Exercice 02

    Vous devrez, au moyen des fonctions setInterval() ou setTimeout(), réaliser au choix :

    * Un Minuteur
        Le minuteur devra être une application permettant à un utilisateur de saisir des minutes, des heures et des secondes. Il pourra ensuite, par l'appui sur un bouton, lancer le minuteur qui affichera, en temps réel, le temps restant au format hh:mm:ss (soit pour 1 minute et 17 secondes => 00:01:17). Vous ferez en sorte de faire sonner et clignoter le minuteur une fois le temps écoulé (Pour cela, n'hésitez pas à lire la documentation sur l'objet Audio).

    * Un Chronomètre
        Le chronomètre sera une application permettant, via des boutons, de lancer, mettre en pause ou re-initialiser un chronomètre. Le chronomètre disposera d'un compte tour, qui affichera le temps écoulé depuis la dernière mesure (Si l'on mesure le temps à T+ 1min et 17sec puis à T + 2min et 23sec, on aura un tour de 1min 17s et un tour de 1min et 6s). LEs tours seront affichés en dessous du chronomètre et seront également re-initialisés en cas d'appui sur le bouton 'Reset'
*/

Number.prototype.toChrono = function () {
  const hoursExtracted = Math.floor(this / 3600);
  const minutesExtracted = Math.floor(this / 60 - hoursExtracted * 60);
  const secondsExtracted = Math.floor(this % 60);

  const hoursFormat = hoursExtracted.toString().padStart(2, "0");
  const minutesFormat = minutesExtracted.toString().padStart(2, "0");
  const secondsFormat = secondsExtracted.toString().padStart(2, "0");

  return `${hoursFormat}:${minutesFormat}:${secondsFormat}`;
};

document.addEventListener("DOMContentLoaded", () => {
  const minutesBlock = document.querySelector(".js-mututes"),
    secondsBlock = document.querySelector(".js-seconds"),
    hundredthsSecondsBlock = document.querySelector(".js-hundredths-second"),
    btnStart = document.querySelector(".js-btn-start"),
    btnStop = document.querySelector(".js-btn-stop"),
    btnReset = document.querySelector(".js-btn-reset"),
    btnTour = document.querySelector(".js-btn-tour"),
    lapDisplay = document.querySelector("ol#lap-display");

  let interval = null;
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;
  let chronoValue = 0;
  let lastChronoValue = 0;

  const startTimer = () => {
    milliseconds++;
    //   milliseconds += 1000;

    if (milliseconds <= 99) {
      hundredthsSecondsBlock.innerHTML = milliseconds;
    }

    if (milliseconds === 100) {
      hundredthsSecondsBlock.innerHTML = "00";
    }

    if (milliseconds > 99) {
      seconds++;
      secondsBlock.innerHTML = "0" + seconds;
      milliseconds = 0;
    }
    if (seconds > 9) {
      secondsBlock.innerHTML = seconds;
    }
    if (seconds > 59) {
      minutes++;
      minutesBlock.innerHTML = "0" + minutes;
      seconds = 0;
      secondsBlock.innerHTML = "0" + seconds;
    }
    if (minutes > 9) {
      minutesBlock.innerHTML = minutes;
    }
  };

  btnStart.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  });

  btnStop.addEventListener("click", () => {
    clearInterval(interval);
  });

  btnReset.addEventListener("click", () => {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesBlock.innerHTML = "00";
    secondsBlock.innerHTML = "00";
    hundredthsSecondsBlock.innerHTML = "00";
  });

  btnTour.addEventListener("click", () => {
    const fullTime = milliseconds + seconds * 100 + minutes * 6_000;
    const newLIElement = document.createElement("li");
    newLIElement.textContent = (fullTime - lastChronoValue).toChrono();
    lapDisplay.appendChild(newLIElement);
    lastChronoValue = fullTime;
  });
});
