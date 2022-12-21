// tipi letterali possiamo definire un set customizzato di valori possibili

// non solo quelli noti dalle keyowrd string number boolean ecc
// ma possiamo specificare che valori eatti le nostre stringhe,numeri e booleani possono avere

// riduzione-> elenco i casi potenziali possibili
type testResult = "passato" | "fallito" | "incompleto";

let myResult: testResult; // i valori possibili sono quelli che ho elencato

myResult = "incompleto"; // valida
myResult = "passato"; // valida
myResult = "43"; // invalida

type dado = 1 | 2 | 3 | 4 | 5 | 6;
let tiroDado: dado;
tiroDado = 1; // valido
tiroDado = 6; // valido
tiroDado = 7; // non valido
