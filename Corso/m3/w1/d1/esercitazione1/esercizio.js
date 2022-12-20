var numero1 = Math.floor(Math.random() * 100) + 1;
var numero2 = Math.floor(Math.random() * 100) + 1;
function confronto(n1, n2) {
    // numero segreto
    var segreto = Math.floor(Math.random() * 100) + 1;
    // differenze tra i due numeri e il numero segreto
    var diff1 = Math.abs(n1 - segreto);
    var diff2 = Math.abs(n2 - segreto);
    // faccio un check delle due differenze
    console.log(diff1);
    console.log(diff2);
    // stampo in console le differenti stringhe!
    if (diff1 > diff2) {
        console.log("Player1: ".concat(n1, ",Player2: ").concat(n2, ",Numero Casuale: ").concat(segreto, ". Nessuno dei due ha azzeccato il numero casuale! ma giocatore 2 si \u00E8 avvicinato di piu"));
    }
    else if (diff1 < diff2)
        console.log("Player1: ".concat(n1, ",Player2: ").concat(n2, ",Numero Casuale: ").concat(segreto, ". Nessuno dei due ha azzeccato il numero casuale! ma giocatore 1 si \u00E8 avvicinato di piu"));
    else if (n1 == segreto) {
        console.log("Player 1 ha azzaccato il numero segreto che \u00E8 ".concat(segreto));
    }
    else if (n2 == segreto) {
        console.log("Player 2 ha azzeccato il numero ssegreto che \u00E8 ".concat(segreto));
    }
}
// richiamo la funzione
confronto(numero1, numero2);
