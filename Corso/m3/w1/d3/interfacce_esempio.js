// interfaccia è un contratto sintattico, definisce la sintassi a cui deve aderire un identita
var customer = {
    firstname: "tom",
    lastname: "Hanks",
    sayHi: function () {
        return "Hi there";
    }
};
console.log(customer);
console.log(customer.firstname);
console.log(customer.lastname);
console.log(customer.sayHi());
