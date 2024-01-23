// Random integer
const generateArray = (max, min, length) => {
    length = +prompt("Saisissez le nombre de chiffre que comportera le tableau");
    let randomArray = [];
    for (let i = 0; i <= length - 1; i++) {
      randomArray.push(Math.floor(Math.random() * (max - min) + min))
        randomArray[i] % 2 === 0 ? 
        console.log(`Le nombre ${randomArray[i]} est pair.`) : 
        console.log(`Le nombre ${randomArray[i]} est impair.`)
    }
  }
  let numbers = generateArray(50, 1,);

