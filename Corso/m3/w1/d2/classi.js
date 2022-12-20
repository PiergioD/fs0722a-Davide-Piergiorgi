// typescript suppporta l'ereditarieta delle  classi
// la keyord extends una classe base
// nel costruttore della classe derivata useremo la keyword super() per invocare il costruttore della classe base
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Veicolo = /** @class */ (function () {
    function Veicolo(marca, modello, tipoVeicolo) {
        this.marca = marca;
        this.modello = modello;
        this.tipoVeicolo = tipoVeicolo;
    }
    Veicolo.prototype.dettagliVeicolo = function () {
        return "".concat(this.tipoVeicolo, " - ").concat(this.marca, " - ").concat(this.modello);
    };
    return Veicolo;
}());
var Cars = /** @class */ (function (_super) {
    __extends(Cars, _super);
    function Cars(marca, modello) {
        return _super.call(this, marca, modello, "auto") || this;
    }
    return Cars;
}(Veicolo));
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(marca, modello) {
        return _super.call(this, marca, modello, "moto") || this;
    }
    return Motorbike;
}(Veicolo));
var jaguar = new Cars("jaguar", "F-type");
var ducati = new Motorbike("ducati", "panigale v4");
console.log(jaguar instanceof Cars);
