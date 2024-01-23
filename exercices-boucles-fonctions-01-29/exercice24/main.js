let listContact = [],
    nbContacts,
    newContact,
    userChoice,
    quitterProgramme = false



function addContacts() {
    nbContacts = +prompt("Combien de contacts ?")
    for (let i = 0; i < nbContacts; i++) {
        let newContact = prompt("Donnez le nom du contact n°" + (i+1))
        if (listContact.includes(newContact)) {
            i--
        } else {
            listContact.push(newContact)
        }
        
    }
}

function displayContacts() {
    console.log("=== LISTE DES CONTACTS ===");
    listContact.forEach((contact, index) => {
        console.log(`${index}: ${contact}`);
    })
}

function sortContactAbc() {
    listContact.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
    console.log(listContact);
}

function randomSort() {
    listContact.sort(() => { return 0.5 - Math.random()})
}

function deletContact() {
    let contactName = prompt("Veiller ....")

    let contactFound = listContact.find((contact) => contact === contactName)
    if (contactFound) {
        listContact = listContact.filter((contact) => contact !== contactFound)
    }
}

function searchByName() {
    let contactName = prompt("Veiller ....")

    let contactFound = listContact.find((contact) => contact.includes(contactName))
    if (contactFound) {
        console.log("Contact:" + contactFound);
    }
}46
    


while (quitterProgramme === false) {

    userChoice = prompt(`
    === MENU PRINCIPAL ===
    1. Saisir le contacts
    2. Afficher
    3. Trier
    4. Mélanger
    5. Supprimer
    6. Rechercher
    0. Quitter 
`)

switch (userChoice) {
    case "1":
        addContacts()
        break;

    case "2":
        displayContacts()
        break;

    case "3":
        sortContactAbc()
        break;

    case "4":
        randomSort()
        break;

    case "5":
        deletContact()
        break;

    case "5":
        searchByName()
        break;

    case "5":
        quitterProgramme === true
        break;
    
}

    
}