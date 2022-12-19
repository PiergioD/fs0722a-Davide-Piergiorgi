/*
var numero: number = 12;
console.log(numero);

var message: string = "hello world";
console.log(message);
*/
class Greeting {
  greet(): void {
    console.log("hello world!!");
  }
}

var obj = new Greeting();
// definisco classe greeting
// aggiungo un metodo greet
// il metodo stampa una stringa in console
// la keyword new crea un oggetto della class obj
// l'oggetto invoca il metodo greet
obj.greet();
