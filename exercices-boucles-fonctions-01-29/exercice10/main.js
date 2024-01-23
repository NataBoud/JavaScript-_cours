// exo 10

// Corrections

const height = +prompt("Saisir la hauteur:");

for (let line = 1; line < height + 1; line++) {
    // console.log("*".repeat(ligne));
    let view = "";

    // calcule les espaces
    for(let nbSpace = 0; nbSpace < height - line; nbSpace++) {
        view += " ";
    }
    // calcule les étoiles
    for(let nbStar = 1; nbStar < line * 2; nbStar++) {
        view += "*";
    }
    console.log(`${view}`);
}


for(let line = 1; line < height + 1; line++) {
    console.log(`${" ".repeat(height - line)}${"*".repeat(line * 2 - 1)}`);
}


