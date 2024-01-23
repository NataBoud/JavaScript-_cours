
let tabNotes = [],
    maxNote,
    minNote,
    moyNotes,
    note = 0,
    userInput,
    nbNotes,
    total = 0,
    quitterProgramme = false

function inputPositive () {
    while (note >= 0) {
        note = +prompt("Veuillez saisir une note :")
        while (note > 20) {
            note = +prompt("ERREUR DE SAISIE : Veuillez saisir une note :")
        }
        if (note >= 0 && note <= 20) {
            tabNotes.push(note)
        }
    }
}

function inputFixNumber () {
    nbNotes = +prompt("Veuillez saisir le nombre de notes")
    for(i = 1; i <= nbNotes; i++) {
        note = +prompt("Veuillez saisir une note :")
        while (note < 0 || note > 20) {
            note = +prompt("ERREUR DE SAISIE : Veuillez saisir une note entre 0 et 20 :")
        }
        if (note >= 0 && note <= 20) {
            tabNotes.push(note)
        }
        console.log(tabNotes);
    }
}

function displayNoteMax() {
    maxNote = Math.max(...tabNotes)
    console.log(`Note max : ${maxNote.toFixed(2)}/20`);
}

function displayNoteMin() {
    minNote = Math.min(...tabNotes)
    console.log(`Note min : ${minNote.toFixed(2)}/20`);
}

function displayMoyenne() {
    total = tabNotes.reduce((accumulator, currentValue) => accumulator + currentValue)
    moyNotes = total / tabNotes.length
    console.log(`Moyenne des notes : ${moyNotes.toFixed(2)}/20`);
}

function displayMenu() {
    userInput = prompt(`
    Choisir un mode de saisie:
    1 : Saisie fixe
    2 : Saisie jusqu'à note négative 
    `)

    switch(userInput) {
        case "1":
            inputFixNumber()
            break;
        case "2":
            inputPositive()
    }

    while (quitterProgramme == false) {
        userInput = prompt(`
        1 - Afficher la note max
        2 - Afficher la note min
        3 - Afficher la moyenne des notes
        4 - Quitter le programme
        `)
    
        switch(userInput) {
            case "1" : 
                displayNoteMax()
                break
            case "2" :
                displayNoteMin()
                break
            case "3":
                displayMoyenne()
                break
            case "4":
                quitterProgramme = true
                break
        }
    }
}

displayMenu()