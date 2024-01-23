
let container = document.getElementById("listPrenom");
let btn = document.querySelector(".form-control");


const addName = () => {
    let newEvent = document.createElement("list");
    newEvent.className = "list-group-item"
    newEvent.innerText = btn.value;
    container.appendChild(newEvent);
    btn.value = "";
}




// const deleteName = () => {
//     let nameFind = container.find((n) => n === bnt.value)

//     if(nameFind) {
//         container = container.filter((name) => name !==  bnt.value)
//         btn.value = "";
//         addName()
//     }
    
// }