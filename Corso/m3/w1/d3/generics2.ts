// uso di piu variabili di tipo

// funzione identity che accetta due parametri diversi
// posso usare due generics T e U e assegno tipi diversi a ogni parametro

function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

// inizializzo una variabile chiamando la funzione identity e asegno i tipi per gli argomenti value e message

let returnNumber = identity<number, string>(100, "Hello");
let returnString = identity<string, string>("100", "Hello");
let returnBoolean = identity<boolean, string>(true, "Bounjour");

// typescript constrolla il tipo di dati e resituisce un erroe se si verifica un conflitto!
returnNumber = returnNumber * 100; //ok
returnString = returnString * 100; //ERRORE-> non mi lascia assegnare number a string
