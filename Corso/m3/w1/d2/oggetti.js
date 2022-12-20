var person = {
    firstname: "davide",
    lastname: "piergiorgi",
    sayHello: function () { }
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
    lastname: "piergiorgi"
};
var invokePerson = function (obj) {
    console.log("first name: " + obj.firstname);
    console.log("last name: " + obj.lastname);
};
invokePerson(person);
// classi
var Persona = /** @class */ (function () {
    function Persona(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    Persona.prototype.visualizzaNomeCompleto = function () {
        return this.nome + " " + this.cognome;
    };
    return Persona;
}());
var Car = /** @class */ (function () {
    // construcotr -> funzione speciale di class che serve a inizializzare le variabili
    function Car(engine) {
        this.engine = engine;
    }
    // function
    Car.prototype.disp = function () {
        console.log("engine is: " + this.engine);
    };
    return Car;
}());
