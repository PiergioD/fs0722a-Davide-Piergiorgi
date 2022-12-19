// sintassi per dichiarare variabile

//let name: string = "mary"; //la variabile memporizza un tipo di dato stringa
//let nome:string // la variabile è una stringa ed è undefined
//let nome ="mary" // il tipo di dato è dedotto dal valore che scrivo-> la variabile è di tipo stringa
//let nome // il tipo di dato è any e il valore è undefined

let nome: string = "john";
let score1: number = 50;
let score2: number = 42.5;
let sum = score1 + score2;
console.log("name" + nome);
console.log("first score " + score1);
console.log("second score " + score2);
console.log("sum of the score " + sum);

let code: any = 123;
let employeeCode = <number>code;
console.log(typeof employeeCode);

// inferred typing

var num = 2; // data type dedotto(inferred) come un numero
console.log("value of num " + num);
//num = "12"; // da errore perche num è in realta num:number!

// ambiti delle variabili
var global_num = 12; // global var
class Numbers {
  num_val = 13; // class var
  static sval = 10; // static field

  storNum(): void {
    var local_num = 14; // local var
  }
}

console.log("global num: " + global_num);
console.log(Numbers.sval);
var obj = new Numbers();
console.log("global num " + obj.num_val);
//console.log("local num" + local_num); // non lo stampa(si tenta di avvedere alla variabile locale da fuori al metodo)

export {};
