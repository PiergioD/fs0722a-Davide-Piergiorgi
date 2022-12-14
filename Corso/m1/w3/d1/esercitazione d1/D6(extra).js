// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

// funzione esercizio D6 10
const giveMeRandom = (n) => {
  arr = [];

  for (let i = 0; i < n; i++) {
    let randomNUm = Math.floor(Math.random() * 11);

    arr.push(randomNUm);
  }

  return arr;
};

// Eserczio D6 extra 1
// da completare
/* SCRIVI QUI LA TUA RISPOSTA */
const checkArray = (arr) => {
  let sum = 0;

  for (let i = 0; i > arr.length; i++) {
    if (arr[i] > 5) {
      console.log(arr[i]);
      sum += arr[i];
    }
  }

  return sum;
};
let randomArr = giveMeRandom(4);
let somma = checkArray(randomArr);
console.log(somma);

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let shoppingCart = [];
function Carrello(price, name, id, quantity) {
  this.price = price;
  this.name = name;
  this.id = id;
  this.quantity = quantity;
}
/*
for (let i = 0; i < 10; i++) {
  let rnd = Math.round(Math.random() * 15);
  shoppingCart[i] = new Carrello(rnd,banana,i,5);
}

function shoppingCart(eleCar) {
  let totale = 0;
  for (g of eleCar) {
    totale += g.price * g.quantity;
  }
  return totale;
}
*/
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
shoppingCart.push(new Carrello(2, "banana", 4, 6));
console.log(shoppingCart);

function addToShoppingCart(obj) {
  let l = shoppingCart.length;
  shoppingCart[l] = obj;
  return l + 1;
}
/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

shoppingCart.push(new Carrello(3, "apple", 3, 8));

function maxShoppingCart(arr) {
  let max = 0;
  let i = 0;
  let j;
  arr.forEach((element) => {
    if (element.price > max) {
      max = element.price;
      j = i;
    }
    i++;
  });
  console.log(arr[j]);
}

maxShoppingCart(shoppingCart);
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
