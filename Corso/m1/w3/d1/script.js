///////////////////////////////////7
// Classe Date

let now = new Date("11/05/2022 10.00");

// date è una classe programmata per essere una stringa!
// questo orario è quello del mio dispositivo!
// al momento è statica! non si aggiorna da sola!
// usa il formato iinglese delle date! mi scrive in pagina la stringa indicata

//////////// get
{
  let now = new Date();
  let mesi = now.getMonth(); // mi da i mesi
  let indiceDelGiorno = now.getDay(); // parte da domenica e conta ad array-->Mi indica l'indice del giorno partendo da domenica--> domenica è 0
  console.log(indiceDelGiorno); // oggi che è venerdi mi dice che è giorno 5!
  let giorno = now.getDate(); // mi da invece il giorno corrente del mese
  let anno = now.getFullYear(); // mi da l'anno corrente
  let minuti = now.getMinutes(); // mi dice a che minuto è stato lanciato
  let ore = now.getHours(); // a che ora è stato lanciato
  let secondi = now.getSeconds(); // a che secondo è stato lanciato
  let timeStamp = now.getTime(); // mi da i millisecondi
  console.log(timeStamp); // utili per fare comparazioine per if/else statemente ritorna i valori dalla data 1/1/1970 fino alla data che utilizza il metodo
  console.log(`${ore}:${minuti}:${secondi}`); // mi stampa in console l'ora che ho lanciato questo console.log
}
///////////////////////////////////
// set
{
  let future = new Date();
  future.setMonth(0);
  console.log(future); // mi setterà una data  completa con la specifica di mese index 0(gennaio)

  future.setMonth(12); // l'array dei mesi va da 0 a 11, se scrivo 12 mi darà ridinuovo gennaio! Cicla cosi!
  future.setMonth(future.getMonth() + 1); // imposto la data ad un mese da oggi!
  // cosa si puo applicare ad ogni tipologia di set
}

//getTime invece mi da i millisecondi, utile per capire chi fa una cosa prima usando un if/else statement
{
  //formato: anno,mese,giorno,ore,minuti,secondi,millisecondi (se mancano millisecondi e secondi vanno a zero)
  let data = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    year: "numeric",
    month: "short",
  };
  data.toLocaleDateString(); // tira fuori in formato italiano la data 4/11/2022
  console.log(data.toLocaleDateString("it-IT", options)); // mi scrive la data attuale (me lo indica COME nell'ogetto(options) come parametro in lingua italiano)
  // per mostrare una data nel formato del locale scelto! (l'area geografica)
}
setInterval(function () {
  let ora = new Date();
  let minuti = ora.getMinutes();
  let ore = ora.getHours();
  let secondi = ora.getSeconds();
  document.getElementById("time").textContent = `${ore}:${minuti}:${secondi}`;
}, 1000); // aggiorna l'ora ogni millisecondo

/////////////////////////////////////////////////////////
// funzioni

function nomeFunzione() {
  return "testo";
}
// l'importante dato su return è che l'arrivo di return blocca l'esecuzione della funzione
// le funzioni possono avere o non avere parametri in ingresso! meglio che abbiano valori descrittivi(lo scopo della funzione del aparametro)
function sosVirgole(testo) {
  if (typeof testo == "string") return Number(testo.replaceAll(",", "."));
  // se if è vero, blocca esecuzione funzione! quindi non ce bisogno del return
  // se  non ce return, la funzione riporterà undefined
  /*

Let testoconPunti = Number(testo.replaceAll(",", ".")
return {
    modificato:testoconPUnti
    originale: testo // posso prendere un valore che voglio facendo un oggettto
} */ else {
    throw new Error(
      "la funzione sosVirgole richiede una stringa, hai inserito un dato di tpo :" +
        typeof testo
    );
  }
}

console.log(sosVirgole("5,3")); // mi stamp in console --> 5.3

function moltiplica(a = 1, b = 1) {
  // setto un default value! se non viene chiamato nella funzione
  return a * b;
}

console.log(moltiplica(5, 3)); // se metto a richiammo solo un valore io metto undefined in quello che non ce! quindi mi darà NaN!
// ci devo mettere sempre un valore! nel richiamo devo rispettare l'ordine dei parametri!

// usando spread operator
function moltiplicaPro(...numeri) {
  // tutti i numeri che voglio chiamare e me li mette in un array
  console.log(numeri);
  let moltiplicazione = 1;
  for (let numero of numeri) {
    moltiplicazione *= numero;
  }
  return moltiplicazione;
}

console.log(moltiplicaPro(5, 8, 6, 4, 3, 21, 2));

// versione alternativa della funzione sopra! con reduce
function moltiplicaProUltra(...numeri) {
  return numeri.reduce((c, p) => c * p);
}

console.log(moltiplicaProUltra(5, 3, 32, 3, 5, 4, 21));

// gestione valori mancanti

function somma(a, b) {
  if (a !== undefined || b !== undefined) {
    return a + b;
  }
}
/*
versione ristretta:

function somma(a,b){
if((!a || !b) &&(a!=0 && b!=0)){
    return 'error' // se a esiste ed è superiore a zero, mi dice true! 
}
return a+b}
*/
console.log(somma(5));

// IIFE
let dato = (function () {
  // funzione che si auto esegue anonima!
  console.log("eseguita");
  return "ecco il dato"; // la var dato conterrà questa stringa
})(); // le parentesi tonde dopo esegue la funzione!
console.log(dato);

// closures

function aa() {
  let x = 0; // x esiste in aa
  function bb() {
    console.log(x); // bb posso utilizzare dati della funzione parent!
  }
  bb();
}

aa();

function a(x) {
  return function b(y) {
    return function c(z) {
      return x + y + z;
    };
  };
}

let risultato = a(5)(7)(4); // richiamo la funzione parente, e di fianco tra parentesi vanno concatenate i parametri delle funzioni figlie!
console.log(risultato);

// funzioni freccia

const nomeFunzioneFreccia = () => "testo";
// con arrow function sparisce la parola function!
// scompare return e graffe

console.log(nomeFunzioneFreccia()); // mi carica in console 'testo!

const arrowConParametro = (a) => a * 2; // con un solo paraemtro posso eliminare le tonde!
console.log(arrowConParametro(2));

const arrowConParametri = (a, b) => a * b;
console.log(arrowConParametri(2, 5));

const arrowLunga = () => {
  let a = "testo";
  return a;
};
// se tornano le graffe, ritorna returconstarrowLunga();
