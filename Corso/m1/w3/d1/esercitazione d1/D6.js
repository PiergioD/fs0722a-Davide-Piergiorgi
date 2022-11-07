/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
const area = (l1, l2) => console.log(l1 * l2);

let areRet = area(5, 7);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = (n1, n2) => (n1 === n2 ? (n1 + n2) * 3 : n1 + n2);

let sum = console.log(crazySum(Math.floor(5), Math.floor(6)));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = (n) => (n > 19 ? Math.abs((n - 19) * 3) : Math.abs(n - 19));

console.log(crazyDiff(-86));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = (n) => {
  if ((n >= 20 && n <= 100) || n === 400) return true;
  else return false;
};

console.log(boundary(Math.floor(Math.random() * 401)));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = (str) => {
  if (str.includes("EPICODE")) return str;
  else {
    return "EPICODE" + " " + str;
  }
};

console.log(epify("banana in pigiama"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = (n) => (Math.abs(n % 3 == 0 || n % 7 == 0) ? true : false);

console.log(check3and7(Math.floor(Math.random() * 22)));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Metodo spiccio
//const reverseString = (str) =>
// console.log(str.toUpperCase().split("").reverse().join(""));

// Metodo giusto
const reverseString = function (str) {
  let strSPlitted = str.split("");
  let reverseStr = strSPlitted.reverse();
  let finalStr = reverseStr.join("");

  return finalStr;
};

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = (str) => {
  const paroline = str.split(" ");

  for (let i = 0; i < paroline.length; i++) {
    paroline[i] = paroline[i][0].toUpperCase() + paroline[i].substr(1);
  }

  return paroline.join(" ");
};

/*
// METODO ALTERNATIVO !
const upperFirst = (str) =>{
let words = str.split(' ')
let finalString =[]
for(let i =0; i<words.length;i++)
{
  let firstChar = word[i].charAt(0);
  let upperCaseChart = firstChar.toUpperCase();
  let cutString = words[i].slice(1);
  let finalWord = upperCaseChart + CutString;
  let finalString = finalString.push(finalWord)
}

return finalString.join(' ')
}


*/
console.log(upperFirst("banana in pigiama"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = (str) => str.slice(1, -1);

console.log(cutString("Brunoliegibastonliegi"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
const giveMeRandom = (n) => {
  arr = [];

  for (let i = 0; i < n; i++) {
    let randomNUm = Math.floor(Math.random() * 11);

    arr.push(randomNUm);
  }

  return console.log(arr);
};

giveMeRandom(8);

*/
