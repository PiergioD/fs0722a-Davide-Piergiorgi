var person = {
  firstname: "davide",
  lastname: "piergiorgi",
  sayHello: function () {}, // type template
};

console.log(person.firstname);
console.log(person.lastname);

// gli oggetti devono avere sempre un tipo(type template)
person.sayHello = function () {
  console.log("hello " + person.firstname);
};
// mi restituisce errore perche non ho definito tipo

person.sayHello();

// oggetti con parametri di funzione

var person1 = {
  firstname: "davide",
  lastname: "piergiorgi",
};

var invokePerson = function (obj: { firstname: string; lastname: string }) {
  console.log("first name: " + obj.firstname);
  console.log("last name: " + obj.lastname);
};

invokePerson(person);

// classi

class Persona {
  nome: string;
  cognome: string;
  constructor(nome: string, cognome: string) {
    this.nome = nome;
    this.cognome = cognome;
  }

  visualizzaNomeCompleto() {
    return this.nome + " " + this.cognome;
  }
}

class Car {
  // field
  engine: string;

  // construcotr -> funzione speciale di class che serve a inizializzare le variabili
  constructor(engine: string) {
    this.engine = engine;
  }

  // function
  disp(): void {
    console.log("engine is: " + this.engine);
  }
}

// create a object
var obj = new Car("XXXSY1");

// access field
console.log("Leggo attributo valore di Engine " + obj.engine);
obj.disp();
