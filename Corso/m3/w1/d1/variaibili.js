let nome = "john";
let score1 = 50;
let score2 = 42.5;
let sum = score1 + score2;
console.log("name" + nome);
console.log("first score " + score1);
console.log("second score " + score2);
console.log("sum of the score " + sum);
let code = 123;
let employeeCode = code;
console.log(typeof employeeCode);
var num = 2;
console.log("value of num " + num);
var global_num = 12;
class Numbers {
    constructor() {
        this.num_val = 13;
    }
    storNum() {
        var local_num = 14;
    }
}
Numbers.sval = 10;
console.log("global num: " + global_num);
console.log(Numbers.sval);
var obj = new Numbers();
console.log("global num " + obj.num_val);
export {};
