let numero1: number = Math.floor(Math.random() * 100) + 1;
let numero2: number = Math.floor(Math.random() * 100) + 1;

// Funzione per il confronto
function confrontaNumeri(n1: number, n2: number) {
  // numero segreto
  let segreto: number = Math.floor(Math.random() * 100) + 1;

  // differenze tra i due numeri e il numero segreto
  let diff1: number = Math.abs(n1 - segreto);
  let diff2: number = Math.abs(n2 - segreto);

  // faccio un check delle due differenze
  console.log(diff1);
  console.log(diff2);

  // stampo in console le differenti stringhe!
  if (diff1 > diff2) {
    console.log(
      `Player1: ${n1},Player2: ${n2},Numero Casuale: ${segreto}. Nessuno dei due ha azzeccato il numero casuale! ma giocatore 2 si è avvicinato di piu`
    );
  } else if (diff1 < diff2)
    console.log(
      `Player1: ${n1},Player2: ${n2},Numero Casuale: ${segreto}. Nessuno dei due ha azzeccato il numero casuale! ma giocatore 1 si è avvicinato di piu`
    );
  else if (n1 == segreto) {
    console.log(`Player 1 ha azzaccato il numero segreto che è ${segreto}`);
  } else if (n2 == segreto) {
    console.log(`Player 2 ha azzeccato il numero ssegreto che è ${segreto}`);
  }
}

// richiamo la funzione
confrontaNumeri(numero1, numero2);
