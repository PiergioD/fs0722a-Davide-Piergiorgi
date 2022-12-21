// interfaccia è un contratto sintattico, definisce la sintassi a cui deve aderire un identita

// le interfacce definiscono proprietà/metodi che sono i membri dell'interfaccia (contengono solo dichiarazione dei membri)

// sarà nelle classi derivate che andremo a definire i membri-> fornisco ujna struttura standard che le classi seguono

interface IPerson {
  firstname: string;
  lastname: string;
  sayHi: () => string;
}

var customer: IPerson = {
  // l'oggetto ha il vincolo definito dall'interfaccia
  firstname: "tom",
  lastname: "Hanks",
  sayHi: () => {
    return "Hi there";
  },
};

console.log(customer);
console.log(customer.firstname);
console.log(customer.lastname);
console.log(customer.sayHi());

// posso popolarla tutte le votle che voglio! creo oggetti literal usando interfaccia
var employee: IPerson = {
  firstname: "banana",
  lastname: "in pigiama",
  sayHi: () => {
    return "Hi there";
  },
};

console.log(employee);
console.log(employee.firstname);
console.log(employee.lastname);
console.log(employee.sayHi());

// ereditarietà

interface Person {
  age: number;
}

interface Musician extends Person {
  instrument: string;
}

var drummer = <Musician>{};
drummer.age = 27;
drummer.instrument = "batterista";
console.log("age " + drummer.age);
console.log("instrument: " + drummer.instrument);
