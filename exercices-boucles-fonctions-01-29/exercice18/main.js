// exo 18

function palindrome(string) {  
    const len = string.length;  
    for (let char = 0; char < len / 2; char++) {  
        if (string[char] !== string[len - 1 - char]) {  
            alert("Ce n'est pas un palindrome");  
        }  
    }  
    alert( "C'est un palindrome");  
}  

const string = prompt("Saisissez des nombre ou des lettres:");  
  
const value = palindrome(string.toLowerCase());  
console.log(value);  


// correction

function isPalindrome(word) {
    let wordReversed = "";

    for (let count = word.length; count >= 0; count--) {
        wordReversed += word.charAt(count);
    }

    console.log(wordReversed);

    // toLowerCase() met la chaine de caractère en minuscule
    return wordReversed.toLowerCase() === word.toLowerCase();
}

let word = prompt("Saisir un mot");

if (isPalindrome(word)) {
    console.log(`${word} est un palindrome`);
} else {
    console.log(`${word} n'est pas un palindrome`);
}