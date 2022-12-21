// i generics sono un modo per fornire a funzioni/classi/interfacce ecc per indicare che tipo di dato si vuole usare al momento della chiamata

// funziona un po come il passaggio di argomenti ad una funzione MA indica anche il tipo che deve aspettarsi alla chiamata

// quando li usiamo? quando abbiamo una ampia gamma di dati diversi- quando usiamo quel tipo di dati in diversi punti

// i  vantaggi? - possibilita di riutilizzare il codice - ridurre la necessita di fare ricorso al tipo  any

/*
function getArray(items: any[]): any[] {
  return new Array().concat(items);
}
*/
// funzione getArray genera un array di elementi di tipo any
// variabile numberArray che chiama la funzione getArray e passa dei valori sia numeri e string>Array  che passa stringhe

let numberArray = getArray([5, 4, 2, 2, 34]);
let stringArray = getArray(["cats", "banana", "birds"]);

numberArray.push(25); // ok
stringArray.push("Rabbits"); //ok

//numberArray.push("this is not a number"); // ok èerche ce any
//stringArray.push(30); // ok perche ce any

console.log(numberArray);
console.log(stringArray);

// posso stabilire il tipo di valore che l'array contiene e che quindi typescript possa verificare che il tipo è rispettato
// generics entra in gioco

// riscrivo getArray con generics

// la T definisce una o piu variabili di tipo
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

// i generics definiscono una o piu variabili tipo-> definiscono i tipi di dato che vengono passati racchiusi nelle parentesi angolari
// T è un nome comunemente usato,ma è possibile chiamarlo come si vuole
// viene passato alla prima dichiarazione e poi viene usato per popolare nelle altre dichiarazioni

// nella funzione etArray uso T per specificare il 1.tipo di parametro, 2.il tipo resituitp dalla funzione e 3.resituisce il nuovo array

// getArray<number> -> accettera una matrice di valori number e resituira una matrice di valori number
let numberArray1 = getArray<number>([4, 323, 432, 2, 3, 2, 3]);
numberArray1.push(2); //ok
//numberArray1.push("not a number"); // mi dice di no! ERRORE

let stringArray1 = getArray<string>(["cats", "dogs", "birds"]);
stringArray1.push("rabbitts"); // ok
//stringArray1.push(30); // da errore! non puoi mettere un numero in un array di stringhje

// se si omete la variabile di tipo qunado si chiama la funzione sarà typescript a dedurlo!
// funziona solo su tipi di dati semplici(stringhe,number,boolean,null,undefined), se passo array o oggetti-> resituisce any
