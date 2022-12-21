// type assertion-> imposta il tipo di un valore e dice al compilatorre di non modificarlo
// la usiamo qunado abbiamo una comprensione migliore del tipo di dato rispetto a cio che typescript deduce da solo

let code: any = 123;
let employeeCode = <number>code; // sappiamo che il codice è un numero anche se era dichiarato any
// abbiamo asserito che in questo caso il codice è di tipo number
console.log(typeof employeeCode); // ora employee è number

/*
let employee = {};
employee.name = "john"; // da errore perche la proprieta nome non esiste nel tipo vuoto
*/

// uso l'interfaccia per definire la struttura delle variabili
interface Employee {
  name: string;
  code: number;
}

let employee = <Employee>{
  // uso l'interfaccia per fare l'aasserzione di tipo
};

// adessp posso popolarrlo
employee.name = "john"; // ok
employee.code = 123; //ok
console.log(typeof employee.name);
console.log(typeof employee.code);
console.log(employee.name);
console.log(employee.code);
