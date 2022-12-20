// definizione di una funzione

function function_name() {
  //function body
  console.log("function called");
}

// chiamata di funzione
function test(): void {
  console.log("function callata");
}
// invocazione di funzione
test();

// restituizione di una funzione
function greet(): string {
  // la funzione resituisce una stringa
  return "hello world";
}

function caller() {
  var msg = greet(); // funzione greet invocata dentro la funzione caller
  console.log(msg);
}

// invoco caller
caller();

// funzioni con -> gli argomenti non passati obbligatoriamente tutti

function disp_details(id: number, name: string, mail_id?: string) {
  console.log("ID: ", id);
  console.log("Name: ", name);
  if (mail_id != undefined) console.log("Email ID: ", mail_id);
}

disp_details(123, "john");
disp_details(111, "mary", "email_protetcted");

// parametri rest ... in typescript -> devono essere tutti dello stesso tipo

function addNumbers(...nums: number[]) {
  var i;
  var sum: number = 0;
  for (i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  console.log("sum of numbers: " + sum);
}

addNumbers(2, 3, 4, 5, 5);
addNumbers(5, 6, 5, 3, 3, 5, 3);

// parametri predefiniti -> esempio funzione che calcola un prezzo che ha uno sconto-> dichiaro tipo di dato e valore assieme

function calculate_discount(price: number, rate: number = 0.5) {
  var discount = price * rate;
  console.log("discount amount: " + discount);
}

calculate_discount(1000);
calculate_discount(1000, 0.3);

// funzioni anonime
var msg = function () {
  return "ciao mondo";
};
console.log(msg);

// funzioni anonime con parametri

var res = function (a: number, b: number) {
  return a * b;
};

console.log(res(12, 2));

// anche typescript supporta il costruttore functin

var myFunction = new Function("a", "b", "return a*b");
var z = myFunction(4, 3);
console.log(z);
