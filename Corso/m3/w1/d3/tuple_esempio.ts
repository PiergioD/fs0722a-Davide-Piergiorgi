var mytuple = [10, "hello", "world", "typescript"];
// i tipi sono diversi ma lui li deduce

console.log(mytuple[0]);
console.log(mytuple[1]);

// per fare operazioni sulle tuple sono supportati gran parte dei metodi degli array
console.log("items before push " + mytuple.length); // ritorna lunghezza del tuple 4
mytuple.push(23); // appende il valore alla tuple
console.log("items after push " + mytuple.length); // ritorna la lunghezza della tuple 5
console.log(mytuple.pop() + "popped from the tuple"); // pop rimuove e resituisce item
console.log("items after pop " + mytuple.length); // 4

// le tuple sono mutabili possono aggiornare i valori

console.log("tuple value at index 0 " + mytuple[0]);
// update a tuple
mytuple[0] = 121;
console.log("tuple value at index 0 changed to " + mytuple[0]);

// destrutturazione di una tuple
var a = [10, "hello"];
var [b, c] = a;
console.log(b, c);
