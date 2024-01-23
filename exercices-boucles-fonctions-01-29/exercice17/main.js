//Remplacer les expressions de fonctions par des fonctions fléchées (lambda)

const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}
ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);



// let anonym = function () {
//     console.log("это анонимная функция");
// };

// let anonym1 = () => console.log("это анонимная функция");
// anonym();


// let anonym3 = () => "это анонимная функция";
// console.log (anonym3() );
