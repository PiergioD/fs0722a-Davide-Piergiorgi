"use strict";
// sintassi per dichiarare variabile
exports.__esModule = true;
//let name: string = "mary"; //la variabile memporizza un tipo di dato stringa
//let nome:string // la variabile è una stringa ed è undefined
//let nome ="mary" // il tipo di dato è dedotto dal valore che scrivo-> la variabile è di tipo stringa
//let nome // il tipo di dato è any e il valore è undefined
var nome = "john";
var score1 = 50;
var score2 = 42.5;
var sum = score1 + score2;
console.log("name" + nome);
console.log("first score " + score1);
console.log("second score " + score2);
console.log("sum of the score " + sum);
var code = 123;
var employeeCode = code;
console.log(typeof employeeCode);
// inferred typing
var num = 2; // data type dedotto(inferred) come un numero
console.log("value of num " + num);
//num = "12"; // da errore perche num è in realta num:number!
// ambiti delle variabili
var global_num = 12; // global var
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // class var
    }
    Numbers.prototype.storNum = function () {
        var local_num = 14; // local var
    };
    Numbers.sval = 10; // static field
    return Numbers;
}());
console.log("global num: " + global_num);
console.log(Numbers.sval);
