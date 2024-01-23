// exo 23

const checkQuestionAnswer = +prompt(`Choisir un mode de saisie 1 ou 2:\n1 : Saisie fixe\n2 : Saisie jusqu'à note négative`);
switch (checkQuestionAnswer) {
  case 1 :
    alert("Votre choix : 1");
    length = +prompt("Combien de notes ?");
    let monTableau = [];
    console.log("Début de Saisie !");
    for (let i = 0; i < length ; i++) {
        let saisie = +prompt("Veuillez entrer une note entre 0 et 20 compris :");
        while (saisie < 0 || saisie > 20) {
            alert("ERREUR, veuillez réessayer !");
            saisie = +prompt("Veuillez entrer une note entre 0 et 20 compris :");
        }
        monTableau.push(saisie)
        console.log(saisie);  
    } 
    console.log("Fin de Saisie !");

    const max = Math.max(...monTableau)
    console.log(`La note maximale est de ${max} / 20`);

    const min = Math.min(...monTableau)
    console.log(`La note maximale est de ${min} / 20`);

    const getAvg = (monTableau) => {
    const total = monTableau.reduce((acc, c) => acc + c, 0);
        return total / monTableau.length;
    }
    const average = getAvg(monTableau);
    console.log(`La moyenne est de ${average} / 20`); 
      
    break;

  case 2 :
    alert("Votre choix : 2");
    length = +prompt("Combien de notes ?");
    let monTableau2 = [];
    console.log("Début de Saisie !");
    for (let i = 0; i < length ; i++) {
        let saisie = +prompt("Veuillez entrer une note entre 0 et 20 compris :");
        while (saisie > 20) {
            alert("ERREUR, veuillez réessayer !");
            saisie = +prompt("Veuillez entrer une note entre 0 et 20 compris :");
        }
        monTableau2.push(saisie)
        console.log(saisie);  
    } 
    console.log("Fin de Saisie !");

    const max2 = Math.max(...monTableau2)
    console.log(`La note maximale est de ${max2} / 20`);

    const min2 = Math.min(...monTableau2)
    console.log(`La note maximale est de ${min2} / 20`);
    
    const getAvg2 = (monTableau) => {
    const total = monTableau.reduce((acc, c) => acc + c, 0);
        return total / monTableau2.length;
    }
    const average2 = getAvg2(monTableau2);
    console.log(`La moyenne est de ${average2} / 20`);

    break;
  default:
    alert("Vous n'avez rien choisi");
}










