// get e set
var Persona3 = /** @class */ (function () {
    function Persona3(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    Object.defineProperty(Persona3.prototype, "nomeCompleto", {
        get: function () {
            return this.nome + " " + this.cognome;
        },
        set: function (valore) {
            var parti = valore.toString().split(" ");
            this.nome = parti[0] || "";
            this.cognome = parti[1] || "";
        },
        enumerable: false,
        configurable: true
    });
    return Persona3;
}());
var marioRossi = new Persona3("mario", "rossi");
console.log(marioRossi.nomeCompleto);
marioRossi.nomeCompleto = "Giuseppe Verdi";
console.log(marioRossi.nomeCompleto);
//  possibilita 1-usiamo --target ES5 per usare get e set (funziona solo da una certa versione di ecma in su)
// possibilita 2- usare tsconfig {
/*  "compilerOptions": {
    "target": "ES6"
  },
  "include": ["*.ts"]
}*/
