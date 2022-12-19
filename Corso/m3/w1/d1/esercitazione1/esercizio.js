let numero1 = Math.floor(Math.random() * 100) + 1;
let numero2 = Math.floor(Math.random() * 100) + 1;
let segreto = Math.floor(Math.random() * 100) + 1;
let diff1 = Math.abs(numero1 - segreto);
let diff2 = Math.abs(numero2 - segreto);
console.log(diff1);
console.log(diff2);
if (diff1 > diff2) {
    console.log(`Player1: ${numero1},Player2: ${numero2},Numero Casuale: ${segreto}. Nessuno dei due ha azzeccato il numero casuale! ma giocatore 2 si è avvicinato di piu`);
}
else if (diff1 < diff2)
    console.log(`Player1: ${numero1},Player2: ${numero2},Numero Casuale: ${segreto}. Nessuno dei due ha azzeccato il numero casuale! ma giocatore 1 si è avvicinato di piu`);
else if (numero1 == segreto) {
    console.log(`Player 1 ha azzaccato il numero segreto che è ${segreto}`);
}
else if (numero2 == segreto) {
    console.log(`Player 2 ha azzeccato il numero ssegreto che è ${segreto}`);
}
