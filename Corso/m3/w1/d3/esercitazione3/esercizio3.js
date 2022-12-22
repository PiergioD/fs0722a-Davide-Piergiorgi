"use strict";
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
exports.__esModule = true;
// classe astratta di partenza per ogni lavoratore--> ogni classe di lavoratore autonomo avrà un codredd che identificherà quanto avra da pagare di percentuale di tasse irpef e inps
var Lavoratore = /** @class */ (function () {
    function Lavoratore(redditoAnnuoLordo, codredd, tasseInps, tasseIrpef) {
        this.codredd = codredd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    // metodo per prendere utile dal lordo da applicare alle tasse
    Lavoratore.prototype.getUtileTasse = function (spesa) {
        return this.redditoAnnuoLordo - spesa;
    };
    // metodo calcolo per tasse inps
    Lavoratore.prototype.getTasseInps = function (utile) {
        return (utile * this.tasseInps) / 100;
    };
    // metodo calcolo per tasse irpef
    Lavoratore.prototype.getTasseIrpef = function (utile) {
        return (utile * this.tasseIrpef) / 100;
    };
    // metodo per calcolare redditto annuo netto
    Lavoratore.prototype.getRedditoAnnuoNetto = function (tassaIrpef, tassaInps) {
        return this.redditoAnnuoLordo - (tassaIrpef + tassaInps);
    };
    return Lavoratore;
}());
// figlio 1 di lavoratore
var InvestigatoreGenealogico = /** @class */ (function (_super) {
    __extends(InvestigatoreGenealogico, _super);
    function InvestigatoreGenealogico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InvestigatoreGenealogico.prototype.getTasseInps = function (utile) {
        _super.prototype.getTasseInps.call(this, utile);
        if (this.redditoAnnuoLordo >= 30000) {
            return (utile * 21) / 100;
        }
        else {
            return (utile * this.tasseInps) / 100;
        }
    };
    InvestigatoreGenealogico.prototype.getTasseIrpef = function (utile) {
        _super.prototype.getTasseIrpef.call(this, utile);
        if (this.redditoAnnuoLordo >= 30000) {
            return (utile * 19) / 100;
        }
        else {
            return (utile * this.tasseIrpef) / 100;
        }
    };
    return InvestigatoreGenealogico;
}(Lavoratore));
// figlio 2 di lavoratore
var Vetraio = /** @class */ (function (_super) {
    __extends(Vetraio, _super);
    function Vetraio(redditoAnnuoLordo, codredd, tasseInps, tasseIrpef) {
        var _this = _super.call(this, redditoAnnuoLordo, tasseInps, tasseIrpef, codredd) || this;
        {
            _this.tasseInps = tasseInps;
            _this.tasseIrpef = tasseIrpef;
            _this.codredd = codredd;
            _this.redditoAnnuoLordo = redditoAnnuoLordo;
        }
        return _this;
    }
    return Vetraio;
}(Lavoratore));
// chiamate dei metodi
var eleuterio = new InvestigatoreGenealogico(12000, 1111, 13, 12);
var tasseUtiliEleuterio = eleuterio.getUtileTasse(1250);
console.log(tasseUtiliEleuterio);
var tasseInpsEleuterio = eleuterio.getTasseInps(tasseUtiliEleuterio);
console.log(tasseInpsEleuterio);
var tasseIrpefEleuterio = eleuterio.getTasseIrpef(tasseUtiliEleuterio);
console.log(tasseIrpefEleuterio);
var redditoNettoEleuterio = eleuterio.getRedditoAnnuoNetto(tasseInpsEleuterio, tasseIrpefEleuterio);
console.log(redditoNettoEleuterio);
console.log("---------------------------------");
var mauriello = new InvestigatoreGenealogico(34000, 3333, 15, 13);
var tasseUtiliMauriello = mauriello.getUtileTasse(7000);
console.log(tasseUtiliMauriello);
var tasseInpsMauriello = mauriello.getTasseInps(tasseUtiliMauriello);
console.log(tasseInpsMauriello);
var tasseIrpefMauriello = mauriello.getTasseIrpef(tasseUtiliMauriello);
console.log(tasseIrpefMauriello);
var redditoNettoMauriello = mauriello.getRedditoAnnuoNetto(tasseInpsMauriello, tasseIrpefMauriello);
console.log(redditoNettoMauriello);
console.log("--------------------------------------");
var brunoliegi = new Vetraio(24000, 2222, 14, 13);
var tasseUtilibrunoliegi = brunoliegi.getUtileTasse(2300);
console.log(tasseUtilibrunoliegi);
var tasseInpsbrunoliegi = brunoliegi.getTasseInps(tasseUtilibrunoliegi);
console.log(tasseInpsbrunoliegi);
var tasseIrpefbrunoliegi = brunoliegi.getTasseIrpef(tasseUtilibrunoliegi);
console.log(tasseIrpefbrunoliegi);
var redditoNettobrunoliegi = brunoliegi.getRedditoAnnuoNetto(tasseInpsbrunoliegi, tasseIrpefbrunoliegi);
console.log(redditoNettobrunoliegi);
