// funzione per le operazioni matematiche
function addCifr(el) {
  let cifraClic = el.getAttribute("data-simbolo");
  document.getElementById("numeri").value += cifraClic;
}

// funzione per l'uguale
function totale() {
  let numbers = document.getElementById("numeri");
  numbers.value = eval(numbers.value);
}
// funzione per cancellare tutto il display
function cancel() {
  let numeri = document.getElementById("numeri");
  numeri.value = "";
  // quando clicclo il pulsante CE, mi riporta la stringa vuota in display
}
//
// funzione per cancellare un carattere del display
function canc1El() {
  let numeri = document.getElementById("numeri");
  numeri.value = numeri.value.substring(0, numeri.value.length - 1);
}
// ogniqualvolta clicclo sul pulsante C, tolgo l'ultimo carattere della stringa in questione.
// mi toglie il carattere -1(da destra) tutte le volte
// substring mi togliere 0 caratteri da sinistra, e 1 da destra tutte le volte che schiaccio il pulsante C
