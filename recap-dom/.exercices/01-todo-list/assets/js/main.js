/*
    Exercice 01

    Réaliser une application de liste de tâches. 

    Il devra être possible pour l'utilisateur d'ajouter des tâches via un input et un bouton d'ajout.

    Le listing des tâches sera affiché plus bas dans la page via une balise <ul> remplie de <li> (une pour chaque tâche)

    Chaque ligne du listing comprendra un bouton permettant de confirmer la fin de la tâche et de la retirer du listing des tâches.

    Le listing des tâches doit être présent dans la mémoire de l'ordinateur et affiché ans l'HTML (les deux variantes devront être avec un contenu identique, on ne doit pas perdre de données)
*/

import Idtodolist from "./Idtodolist.js";

let maTodolist = [];

document.addEventListener("DOMContentLoaded", () => {

  const divTask = document.querySelector("div#task");
  const addButton = document.createElement("button");
  addButton.textContent = "Ajouter une tâche";
  divTask.appendChild(addButton);

  addButton.addEventListener("click", () => {

    const taskContentElement = document.querySelector("textarea#task-content");
    const idTask = new Idtodolist(taskContentElement.value);

    const taskList = document.querySelector("ul#task-list");
    const newLIElement = document.createElement("li");
    newLIElement.textContent = `${idTask.id} ${idTask.text}`;
    taskList.appendChild(newLIElement);

    const finTacheButton = document.createElement("button");
    finTacheButton.textContent = "Fin de tâche";
    newLIElement.appendChild(finTacheButton);

    finTacheButton.addEventListener("click", () => {
      newLIElement.remove()
      maTodolist = maTodolist.filter(blabla => blabla.id !== newLIElement.id);

    })

    maTodolist.push(idTask);
    taskContentElement.value = "";

  });

});

