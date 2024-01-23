const result = document.querySelector(".result"),
      result2 = document.querySelector(".result2"),
      inputText = document.querySelector(".inputText")

result.innerHTML = "<h1>Appel de fonction au clique d'un bouton</h1>"
result2.innerHTML = "test"

function myButtonClique() {
    alert("Cliquer")
}

function onMouseOver() {
    alert("Vous avez surlolé le bouton")
}

function onDbClique() {
    alert("Cliquer deux fois")
}

function arg(arg) {
    switch (arg) {
        case 1 : alert("Cliquer 1");  break;
        case 2 : alert("Cliquer 2");  break;
        case 3 : alert("Cliquer 3");  break;
        case 4 : alert("Cliquer 4");  break;
    
    
    }
}

document.addEventListener("keydown", (event) => {
    console.log(event.key);
    if(event.key == "Enter") {
        let message = inputText.value
        alert("Vous avez appuyé sur Enter \nMessage : " + message)
    }
})

document.addEventListener("click", (event) => {
    console.log(event.target);
   
    let valeur = event.target.dataset.key
    console.log(valeur);
})