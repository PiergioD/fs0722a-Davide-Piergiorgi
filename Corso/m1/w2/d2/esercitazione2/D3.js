/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const funzione0 = (num1, num2) => {
  if (num1 > num2) return console.log(`il Numero1 è piu grande ed è ${num1}`);
  if (num1 < num2) return console.log(`il Numero1 è piu grande ed è ${num2}`);
  else return console.log("Sono uguali!");
};

funzione0(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100));

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const funzione1 = (num) =>
  num != 5 ? console.log("equal") : console.log("not equal");
funzione1(Math.floor(Math.random() * 10));

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const funzione2 = (num) =>
  num % 5 == 0
    ? console.log(`${num} è divisibile per 5`)
    : console.log(`${num} non è divisibile per 5`);
funzione2(Math.floor(Math.random() * 20));

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const funzione3 = (num1, num2) => {
  if (num1 == 8 || num2 == 8 || num1 - num2 == 8 || num1 + num2 == 8)
    return true;
  else return false;
};
/*
ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = (spesa) => {
  if (spesa <= 50)
    console.log(
      `Hai speso ${spesa}€! ti addebiatiamo 10€ di spesa! il tuo totale sarà ${(spesa += 10)} `
    );
  else {
    console.log(`Hai speso ${spesa}€! Spedizione gratuita!`);
  }
};

totalShoppingCart(Math.floor(Math.random() * 100));
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCartScont1 = (spesa) => {
  let spesaSconto = (spesa * 20) / 100;
  let spesaScontata = spesa - spesaSconto;
  if (spesaScontata <= 50)
    console.log(
      ` E' black friday!Hai speso ${spesa}€! con il 20% di sconto hai risparmiato ${spesaSconto}€! Ti addebiatiamo 10€ di spesa! il tuo totale sarà ${(spesaScontata += 10)}€ `
    );
  else {
    console.log(
      `E' black friday! Hai speso ${spesa}€! Con il 20% di sconto hai risparmiato ${spesaSconto}€! Il tuo totale sarà ${spesaScontata}€! Spedizione gratuita!`
    );
  }
};
totalShoppingCartScont1(Math.trunc(Math.random() * 100));

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 5321;
let num2 = 343212;
let num3 = 123123;
let num4 = 333;
let arr1 = [];
arr1.push(num1);
arr1.push(num2);
arr1.push(num3);
arr1.push(num4);

let funzione4 = (arr) => {
  arr.sort(function (a, b) {
    return b - a;
  });
  return arr;
};
funzione4(arr1);
console.log(arr1);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const funzione5 = (num) =>
  typeof num === "number" ? console.log(true) : console.log(false);

funzione5(20);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const funzione6 = (num) =>
  num % 2 == 0 ? console.log("Numero Pari!") : console.log("Numero dispari!");
funzione6(Math.floor(Math.random() * 100));
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 10) {
  console.log(`${val} è meno di 10!`);
} else if (val < 5) {
  console.log(`${val} è meno di 5!`);
} else {
  console.log(`${val} è uguale a 10 o maggiore!`);
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
let città = me.city;
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.splice(-1);
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let arr = [];
const funzione7 = (n) => {
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }
  return console.log(arr);
};
const banana = funzione7(10);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
arr.splice(-1);
arr.push(100);
console.log(arr);
