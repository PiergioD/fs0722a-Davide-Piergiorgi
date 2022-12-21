// tipo unione descrive un valore che puo essere di diversi tipi
// lo usiamo quando un valore non è sotto il nostro controllo(ad esempio potrebbe essere sia string che number)

// non uso any per limitare i tipi possibili

let multitype: number | boolean;

multitype = 20; // valido
multitype = true; // valido
multitype = "twenty"; // non è valido perche o è number o è boolean

// ho valori che posson essere numeri o stringhe,se sono entrambi numeri somma, se sono entrambe stringhe concatena, aaltrimenti errore

function add(x: number | string, y: number | string) {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }

  if (typeof x === "string" && typeof y === "string") {
    return x.concat(y);
  }
  throw new Error("parameteres muust be numbers or strings");
}

console.log(add("one", "two")); // return one two
console.log(add(1, 2)); // return 3
console.log(add("one", 2)); // rreturn error
