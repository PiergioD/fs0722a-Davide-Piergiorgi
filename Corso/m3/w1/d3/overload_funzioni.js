// overload list -> qunado in una funzione dichiaro tipi diversi
// compilatore -> analizza la lista e cerca la compilazione corretta da invocare in base agli argomenti passati
// possiamo definire piu funzione con lo stesso nome ma che hanno parametri diversi per numero e tipo
// possiamo avere valori di ritorno diversi
// 1. elenco le varie versioni di una funzione(senza il corpo della funzione, ma coi tipi di parametri + dei valori di ritorno)
// 2. definisco le funzioni e assegno i diversi comportamenti
function somma(a, b) {
    if (typeof a === "number") {
        return a + b;
    }
    return a.reduce(function (parziale, valoreCorrente, indiceCorrente, a) { return parziale + valoreCorrente; });
}
console.log(somma(11, 22));
console.log(somma([6, 12, 32, 4, 3, 23]));
